import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Preloader from "../Preloader";
import { useOfferContext } from "../../contexts/admin/OfferContext";
import usePostData from "../../hooks/usePostData";

const AdminHeader = ({ headerData }) => {
    const [header, setHeaderData] = useState(headerData);
    let offerContext = useOfferContext();

    const handleHeaderDataChange = (e) => {
        setHeaderData(e.target.value);
        offerContext.header = e.target.value;
    };

    return (
        <div className="block__item">
            <label>Заголовок:</label>
            <input type="text" value={header} onChange={handleHeaderDataChange}/>
        </div>
    );
};

const AdminContent = ({ contentData }) => {
    const [content, setContentData] = useState(contentData);
    let offerContext = useOfferContext();

    const handleContentChange = (e) => {
        setContentData(e.target.value);
        offerContext.content = e.target.value;
    };

    return (
        <div className="block__item">
            <label>Содержание:</label>
            <input type="text" value={content} onChange={handleContentChange}/>
        </div>
    );
};

const AdminButton = ({ buttonTitleData }) => {
    const [buttonTitle, setButtonTitleData] = useState(buttonTitleData);
    let offerContext = useOfferContext();

    const handleButtonChange = (e) => {
        setButtonTitleData(e.target.value);
        offerContext.buttonTitle = e.target.value;
    };

    return (
        <div className="block__item">
            <label>Содержание:</label>
            <input type="text" value={buttonTitle} onChange={handleButtonChange}/>
        </div>
    );
};

const AdminOffer = () => {
    const offerContext = useOfferContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
      } = usePostData({ endpoint: "offer" });

      useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
      }, [status, statusDescription]);
    
      const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: offerContext });
      };
    
      if (status === "loading") return <Preloader />;
      if (!data)
        return (
          <div>
            <h3>Данные не загружены</h3>
          </div>
        );

    const { header, content, buttonTitle } = data;

    return (
        <div className="admin_container admin_offer">
            <h2>Предложение</h2>
            <div className="admin_container__block">
                <div className="block__card">
                    <AdminHeader headerData={header}/>
                    <AdminContent contentData={content}/>
                    <AdminButton buttonTitleData={buttonTitle}/>
                </div>
            </div>
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminOffer;