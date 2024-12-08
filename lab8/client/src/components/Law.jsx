import { lawData } from "../mockData/lawData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

const Header = ({ headerData }) => {
    return (
        <>
        <h3 className="law__block">{headerData}</h3>
        </>
    );
};

const Law = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "law",
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
    const renderedData = data || lawData;
    const {header} = renderedData;
    return (
        <>
            <Header headerData={header}/>
        </>
    );
};

export default Law;