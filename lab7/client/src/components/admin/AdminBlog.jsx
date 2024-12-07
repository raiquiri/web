import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useBlogContext,
  usePostBlogContext,
} from "../../contexts/admin/BlogContext";

const AdminHeader = ({ headerData }) => {
    const [header, setHeader] = useState(headerData);
    let blogContext = useBlogContext();
  
    const handleHeaderChange = (e) => {
      setHeader(e.target.value);
      blogContext.header = e.target.value;
    };
  
    return (
      <div className="admin_container__block">
        <h3>Заголовок блога:</h3>
        <div className="block__item">
            <label>Заголовок</label>
            <input type="text" value={header} onChange={handleHeaderChange}/>
        </div>
      </div>
    );
};

const AdminArticle = ({ articleData, index }) => {
    const [img, setImg] = useState(articleData.img);
    const [alt, setAlt] = useState(articleData.alt);
    const [date, setDate] = useState(articleData.date);
    const [content, setContent] = useState(articleData.content);
    const [offer, setOffer] = useState(articleData.offer);
    let blogContext = useBlogContext();
  
    const handleImgChange = (e) => {
      setImg(e.target.value);
      blogContext.articles[index].img = e.target.value;
    };
  
    const handleAltChange = (e) => {
      setAlt(e.target.value);
      blogContext.articles[index].alt = e.target.value;
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
      blogContext.articles[index].date = e.target.value;
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
      blogContext.articles[index].content = e.target.value;
    };
  
    const handleOfferChange = (e) => {
      setOffer(e.target.value);
      blogContext.articles[index].offer = e.target.value;
    };
  
    return (
      <div className="block__card">
        <h3>Статья {index + 1}</h3>
        <div className="block__item">
          <label>Маршрут изображения:</label>
          <input type="text" value={img} onChange={handleImgChange}/>
        </div>
        <div className="block__item">
          <label>Наименование изображения:</label>
          <input type="text" value={alt} onChange={handleAltChange}/>
        </div>
        <div className="block__item">
          <label>Дата:</label>
          <input type="text" value={date} onChange={handleDateChange}/>
        </div>
        <div className="block__item">
          <label>Контент:</label>
          <input type="text" value={content} onChange={handleContentChange}/>
        </div>
        <div className="block__item">
          <label>Предложение:</label>
          <input type="text" value={offer} onChange={handleOfferChange}/>
        </div>
      </div>
    );
};

const AdminArticles = ({ articlesData }) => {
    return (
      <div className="admin_container__block">
        <h3>Статьи блога:</h3>
        {articlesData.map((article, index) => (
        <AdminArticle key={index} articleData={article} index={index} />))}
      </div>
    );
};

const AdminBlog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "blog",
        options: {
          method: "GET",
        },
    });

    // console.log("data");
    // console.log(data);
    
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = usePostBlogContext();

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
    
      
      const { header, articles } = data;
      return (
        <div className="admin_container admin_blog">
            <h2>Блог</h2>
            <AdminHeader headerData={header} />
            <AdminArticles articlesData={articles} />
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

export default AdminBlog;