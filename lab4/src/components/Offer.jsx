import { offerData } from "../mockData/offerData";

const Header = ({ headerData }) => {
    return (
    <p class="offer__header">{headerData}</p>
    );
};

const Content = ({ contentData }) => {
    return (
    <h3 class="offer__content">{contentData}</h3>
    );
};

const Button = ({ buttonTitleData }) => {
    return (
    <a href="/offer">
        <button class="start_button btn">{buttonTitleData}</button>
    </a>
    );
};

export const Offer = () => {
    const { header, content, buttonTitle } = offerData;

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