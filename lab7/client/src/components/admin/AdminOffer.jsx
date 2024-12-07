import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import { useOfferContext, usePostOfferContext } from "../../contexts/admin/OfferContext";

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
    const { isLoading, isError, error, data } = useData({
        endpoint: "offer",
        options: {
            method: "GET"
        }
    });

    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostOfferContext();

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

    const { header, content, buttonTitle } = data;

    return (
        <div className="admin_container admin_offer">
            <h2>Предложение</h2>
            <AdminHeader headerData={header}/>
            <AdminContent contentData={content}/>
            <AdminButton buttonTitleData={buttonTitle}/>
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

export default AdminOffer;