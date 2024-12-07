import { useState } from "react";
import useData from "../../hooks/useData";
import Preloader from "../Preloader";
import {
  useLawContext,
  usePostLawContext,
} from "../../contexts/admin/LawContext";

const AdminHeader = ({ headerData }) => {
    const [header, setHeader] = useState(headerData);
    let LawContext = useLawContext();

    const handleHeader = (e) => {
        setHeader(e.target.value);
        LawContext.header = e.target.value;
      };

    return (
        <div className="admin_container__block">
            <h3>Заголовок:</h3>
            <div className="block__item">
                <label>Надпись</label>
                <input type="text" value={header} onChange={handleHeader}/>
            </div>
        </div>
    );
};

const AdminLaw = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "law",
        options: {
          method: "GET",
        },
      });
    
      const [isPostDataLoading, setIsPostDataLoading] = useState(false);
      const [isPostDataError, setIsPostDataError] = useState(false);
      const [postDataError, setPostDataError] = useState(null);
    
      const postData = usePostLawContext();
    
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
        <div className="admin_container admin_law">
            <h2>Секция с правами</h2>
            <AdminHeader headerData={data.header}/>
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

export default AdminLaw;