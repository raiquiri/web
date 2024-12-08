import { womanData } from "../mockData/womanData";

import useData from "../hooks/useData";
import Preloader from "./Preloader";

const WomanDescription = ({womanDescriptionData}) => {
    const { text, header, content } = womanDescriptionData;

    return (
        <div className="woman__discription">
            <h3 className="upper__start_up">{text}</h3>
            <h1 className="woman__header">{header}</h1>
            <p className="woman__content">{content}</p>
            <h3 className="lower__start_up">{text}</h3>
        </div>
    );
};

const WomanImage = ({womanImageData}) => {
    const { src, alt } = womanImageData;
    
    return (
        <div className="woman__img">
            <img src={src} alt={alt} />
        </div>
    );
};

const Woman = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "woman",
        options: {
            method: "GET"
        }
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
    const renderedData = data || womanData;
    const {womanImage, text, header, content} = renderedData;

    return (
        <>
            <WomanImage womanImageData={womanImage}/>
            <WomanDescription womanDescriptionData={{text, header, content}} />
        </>
    );
};

export default Woman;