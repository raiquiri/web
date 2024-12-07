import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import { useWomanContext, usePostWomanContext } from "../../contexts/admin/WomanContext";

const AdminWomanDescription = ({ womanDescriptionData }) => {
    const [text, setText] = useState(womanDescriptionData.text);
    const [header, setHeader] = useState(womanDescriptionData.header);
    const [content, setContent] = useState(womanDescriptionData.content);
    let womanContext = useWomanContext();

    const handleTextChange = (e) => {
        setText(e.target.value);
        womanContext.text = e.target.value;
    };

    const handleHeaderChange = (e) => {
        setHeader(e.target.value);
        womanContext.header = e.target.value;
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        womanContext.content = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Описание:</h3>
            <div className="block__item">
                <label>Текст сверху и снизу:</label>
                <input type="text" value={text} onChange={handleTextChange}/>
            </div>
            <div className="block__item">
                <label>Заголовок</label>
                <input type="text" value={header} onChange={handleHeaderChange}/>
            </div>
            <div className="block__item">
                <label>Содержание</label>
                <input type="text" value={content} onChange={handleContentChange}/>
            </div>
        </div>
    );
};

const AdminWomanImage = ({ womanImage }) => {
    const [src, setSrc] = useState(womanImage.src);
    const [alt, setAlt] = useState(womanImage.alt);
    let womanContext = useWomanContext();

    const handleSrcChange = (e) => {
        setSrc(e.target.value);
        womanContext.womanImage.src = e.target.value;
    };

    const handleAltChange = (e) => {
        setAlt(e.target.value);
        womanContext.womanImage.alt = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Изображение:</h3>
            <div className="block__item">
                <label>Маршрут изображения:</label>
                <input type="text" value={src} onChange={handleSrcChange}/>
            </div>
            <div className="block__item">
                <label>Наименование изображения:</label>
                <input type="text" value={alt} onChange={handleAltChange}/>
            </div>
        </div>
    );
};

const AdminWoman = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "woman",
        options: {
            method: "GET"
        }
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostWomanContext();

    const handlePostData = async () => {
        try {
          setIsPostDataLoading(true);
          const { isPostDataError, postDataError } = await postData();
    
          setIsPostDataError(isPostDataError);
          setPostDataError(postDataError);
        } catch (error) {
          console.log(error);
          setIsPostDataError(true);
          setPostDataError(error.message);
        }
        setIsPostDataLoading(false);
    };

    if (isLoading) return <Preloader />;
    if (isError) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <Preloader />;

    const { womanImage, text, header, content } = data;

    return (
        <div className="admin_container admin_woman">
            <h2>Женщина</h2>
            <AdminWomanImage womanImage={womanImage}/>
            <AdminWomanDescription womanDescriptionData={{ text, header, content }}/>
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

export default AdminWoman;