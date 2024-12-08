import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import { useWomanContext } from "../../contexts/admin/WomanContext";
import usePostData from "../../hooks/usePostData";


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
            <div className="block__card">
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
            <div className="block__card">
                <div className="block__item">
                    <label>Маршрут изображения:</label>
                    <input type="text" value={src} onChange={handleSrcChange}/>
                </div>
                <div className="block__item">
                    <label>Наименование изображения:</label>
                    <input type="text" value={alt} onChange={handleAltChange}/>
                </div>
            </div>
        </div>
    );
};

const AdminWoman = () => {
    const womanContext = useWomanContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "woman" });

    useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: womanContext });
      };
    
      if (status === "loading") return <Preloader />;
      if (!data)
        return (
          <div>
            <h3>Данные не загружены</h3>
          </div>
        );

    const { womanImage, text, header, content } = data;

    return (
        <div className="admin_container admin_woman">
            <h2>Женщина</h2>
            <AdminWomanImage womanImage={womanImage}/>
            <AdminWomanDescription womanDescriptionData={{ text, header, content }}/>
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminWoman;