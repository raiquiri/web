import { useEffect, useState } from "react";
import { toast } from "react-toastify";


import Preloader from "../Preloader";
import { useLawContext } from "../../contexts/admin/LawContext";
import usePostData from "../../hooks/usePostData";

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
            <div className="block__card">
              <div className="block__item">
                  <label>Надпись</label>
                  <input type="text" value={header} onChange={handleHeader}/>
              </div>
            </div>
        </div>
    );
};

const AdminLaw = () => {
    const LawContext = useLawContext();
    
    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
      } = usePostData({ endpoint: "law" });
    
      useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
      }, [status, statusDescription]);
    
      const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: LawContext });
      };
    
      if (status === "loading") return <Preloader />;
      if (!data)
        return (
          <div>
            <h3>Данные не загружены</h3>
          </div>
        );
    
    return (
        <div className="admin_container admin_law">
            <h2>Секция с правами</h2>
            <AdminHeader headerData={data.header}/>
            <button className="btn primary-btn" onClick={handlePostData}>
              Сохранить
            </button>
        </div>
    );
};

export default AdminLaw;