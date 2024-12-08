import { offerData } from "../mockData/offerData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

const Header = ({ headerData }) => {
    return (
    <p className="offer__header">{headerData}</p>
    );
};

const Content = ({ contentData }) => {
    return (
    <h3 className="offer__content">{contentData}</h3>
    );
};

const Button = ({ buttonTitleData }) => {
    return (
    <a href="/offer">
        <button className="start_button btn">{buttonTitleData}</button>
    </a>
    );
};

const Offer = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "offer",
        options: {
          method: "GET",
        },
      });
    
    if (isError) {
        console.log("error");
        console.log(error);
    }

     // if (!isLoading) {
      //   console.log("!isLoading");
      //   console.log("data");
      //   console.log(data);
      // }

    if (isLoading) return <Preloader />;
    const renderedData = data || offerData;
    const { header, content, buttonTitle } = renderedData;

    return (
        <>
            <div className="offer__discription">
                <Header headerData={header}/>
                <Content contentData={content}/>
            </div>
            <Button buttonTitleData={buttonTitle}/>
        </>
    );
};

export default Offer;