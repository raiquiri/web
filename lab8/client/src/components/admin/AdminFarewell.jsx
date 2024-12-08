import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import { useFarewellContext } from "../../contexts/admin/FarewellContext";
import usePostData from "../../hooks/usePostData";

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
            <h3>Предложение:</h3>
            <div className="block__card">
                <div className="block__item">
                    <label>Заголовок:</label>
                    <input type="text" value={header} onChange={handleHeaderChange}/>
                </div>
                <div className="block__item">
                    <label>Текст кнопки:</label>
                    <input type="text" value={headerButton} onChange={handleHeaderButtonChange}/>
                </div>
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
            <div className="block__card">
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
        <div className="block__card">
            <div className="block__item">
                <label>Заголовок столбца:</label>
                <input type="text" value={header} onChange={handleTextChange}/>
            </div>
        </div>
    )
} 

const AdminFarewell = () => {
    const farewellContext = useFarewellContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
      } = usePostData({ endpoint: "farewell" });
    
      useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
      }, [status, statusDescription]);
    
      const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: farewellContext });
      };
    
      if (status === "loading") return <Preloader />;
      if (!data)
        return (
          <div>
            <h3>Данные не загружены</h3>
          </div>
        );

      return (
        <div className="admin_container admin_farewell">
            <h2>Секция с контактами</h2>
            <AdminHeader headerData={{ header: data.header, headerButton: data.headerButton }} />
            <AdminGptBlock gptData={data.gptBlock} />
            <div className="admin_container__block">
                <h3>Блок меню:</h3>
                <AdminText text={data.linkBlock} blockName={"linkBlock"}/>
                <div className="block__card">
                    <AdminMenu menuData={data.linkBlock} blockName={"linkBlock"}/>
                </div>
                <AdminText text={data.companyBlock} blockName={"companyBlock"}/>
                <div className="block__card">
                        <AdminMenu menuData={data.companyBlock} blockName={"companyBlock"}/>
                </div>
                <AdminText text={data.contactsBlock} blockName={"contactsBlock"}/>
                <div className="block__card">
                    <AdminMenu menuData={data.contactsBlock} blockName={"contactsBlock"}/>
                </div>
            </div>
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminFarewell;