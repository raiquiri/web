import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import { useFarewellContext, usePostFarewellContext } from "../../contexts/admin/FarewellContext";

const AdminHeader = ({ headerData }) => {
    const [header, setHeader] = useState(headerData.header);
    const [headerButton, setHeaderButton] = useState(headerData.headerButton);
    let farewellContext = useFarewellContext();
    
    const handleHeaderChange = (e) => {
        setHeader(e.target.value);
        farewellContext.header = e.target.value;
    };

    const handleHeaderButtonChange = (e) => {
        setHeaderButton(e.target.value);
        farewellContext.headerButton = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Заголовок:</label>
                <input type="text" value={header} onChange={handleHeaderChange}/>
            </div>
            <div className="block__item">
                <label>Текст кнопки:</label>
                <input type="text" value={headerButton} onChange={handleHeaderButtonChange}/>
            </div>
        </div>
    );
};

const AdminGptBlock = ({ gptData }) => {
    const [src, setSrc] = useState(gptData.src);
    const [alt, setAlt] = useState(gptData.alt);
    const [adress, setAdress] = useState(gptData.adress);
    const [law, setLaw] = useState(gptData.law);
    let farewellContext = useFarewellContext();

    const handleSrcChange = (e) => {
        setSrc(e.target.value);
        farewellContext.gptBlock.src = e.target.value;
    };
    
    const handleAltChange = (e) => {
        setAlt(e.target.value);
        farewellContext.gptBlock.alt = e.target.value;
    };

    const handleAdressChange = (e) => {
        setAdress(e.target.value);
        farewellContext.gptBlock.adress = e.target.value;
    };

    const handleLawChange = (e) => {
        setLaw(e.target.value);
        farewellContext.gptBlock.law = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Блок GPT:</h3>
            <div className="block__item">
                <label>Маршрут изображения:</label>
                <input type="text" value={src} onChange={handleSrcChange}/>
            </div>
            <div className="block__item">
                <label>Наименование изображения:</label>
                <input type="text" value={alt} onChange={handleAltChange}/>
            </div>
            <div className="block__item">
                <label>Адрес:</label>
                <input type="text" value={adress} onChange={handleAdressChange}/>
            </div>
            <div className="block__item">
                <label>Правовая информация:</label>
                <input type="text" value={law} onChange={handleLawChange}/>
            </div>
        </div>
    );
};

const AdminBlock = ({ item, block, index }) => {
    const [itemChange, setItem] = useState(item);
    let farewellContext = useFarewellContext();

    const handleTextChange = (e) => {
        setItem(e.target.value);
        switch (index) {
            case 0:
                farewellContext[block][1].item1 = e.target.value;
                break;
            case 1:
                farewellContext[block][1].item2 = e.target.value;
                break;
            case 2:
                farewellContext[block][1].item3 = e.target.value;
                break;
            case 3:
                farewellContext[block][1].item4 = e.target.value;
                break;

        }
    };

    return (
        <li className="block__item">
            <label>Поле:</label>
            <input type="text" value={itemChange} onChange={handleTextChange}/>
        </li>
    );
};

const AdminMenu = ({ menuData, blockName }) => {
    const menuItems = Object.values(menuData[1]);
    const menu = menuItems.map((item, index) => <AdminBlock item={item} block={blockName} index={index}/>);

    return (menu);
};

const AdminText = ({ text, blockName }) => {
    const [header, setText] = useState(text[0].header);
    let farewellContext = useFarewellContext();

    const handleTextChange = (e) => {
        setText(e.target.value);
        farewellContext[blockName][0].header = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Заголовок столбца:</label>
                <input type="text" value={header} onChange={handleTextChange}/>
            </div>
        </div>
    )
} 

const AdminFarewell = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "farewell",
        options: {
          method: "GET",
        },
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostFarewellContext();

    const handlePostData = async () => {
        try {
          setIsPostDataLoading(true);
          const { isPostDataError, postDataError } = await postData();
          setIsPostDataError(isPostDataError);
          setIsPostDataError(postDataError);
        } catch (error) {
          console.log(error);
          setIsPostDataError(isPostDataError);
          setPostDataError(postDataError);
        }
        setIsPostDataLoading(false);
      };
    
      if (isLoading) return <Preloader />;
      if (isError) return <div>{JSON.stringify(error)}</div>;
      if (!data) return <Preloader />;
    
      // console.log("New data");
      // console.log(data);

      return (
        <div className="admin_container admin_farewell">
            <h2>Секция с контактами</h2>
            <AdminHeader headerData={{ header: data.header, headerButton: data.headerButton }} />
            <AdminGptBlock gptData={data.gptBlock} />
            <div className="admin_container__block">
                <h3>Блок меню:</h3>
                <AdminText text={data.linkBlock} blockName={"linkBlock"}/>
                <div className="admin_menu">
                    <AdminMenu menuData={data.linkBlock} blockName={"linkBlock"}/>
                </div>
                <AdminText text={data.companyBlock} blockName={"companyBlock"}/>
                <div className="admin_menu">
                    <AdminMenu menuData={data.companyBlock} blockName={"companyBlock"}/>
                </div>
                <AdminText text={data.contactsBlock} blockName={"contactsBlock"}/>
                <div className="admin_menu">
                    <AdminMenu menuData={data.contactsBlock} blockName={"contactsBlock"}/>
                </div>
            </div>
            <div className="special_for_button">
            <button className="btn primary-btn" onClick={handlePostData}>
            {isPostDataLoading ? <Preloader /> : ""} Сохранить
            </button>
            </div>
            {isError && <div className="error">{JSON.stringify(error)}</div>}
            {isPostDataError && (<div className="error">{JSON.stringify(postDataError)}</div>)}
        </div>
    );
};

export default AdminFarewell;