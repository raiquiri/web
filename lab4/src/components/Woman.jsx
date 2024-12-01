import { womanData } from "../mockData/womanData";

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

export const Woman = () => {
    const {womanImage, text, header, content} = womanData;

    return (
        <>
            <WomanImage womanImageData={womanImage}/>
            <WomanDescription womanDescriptionData={{text, header, content}} />
        </>
    );
};

export default Woman;