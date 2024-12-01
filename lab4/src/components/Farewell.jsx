import { farewellData } from "../mockData/farewellData";

const Header = ({ headerData }) => {
    const {header, headerButton} = headerData;

    return (
        <>
        <h1
            className="header__discription"
            dangerouslySetInnerHTML={{ __html: header }}
        />
        <a href="">
            <button className="accsess_button btn">{headerButton}</button>
        </a>
        </>
    );
};

const GptBlock = ({ blockData }) => {
    const {src, alt, adress, law} = blockData;

    return (
        <>
        <div className="gpt_3__block">
            <a href="#" className="logo_gpt_3_link">
                <img src={src} alt={alt}/>
            </a>
            <p className="adress">{adress}</p>
            <p className="law">{law}</p>
        </div>
        </>
    );
};

const Block = ({ item }) => {
    return (
        <li className="menu__item">
            <a href="#" className="item__link">{item}</a>
        </li>
    );
};

const Menu = ({ menuData }) => {
    const menuItems = Object.values(menuData);
    const menu = menuItems.map((item) => <Block item={item} />);

    return <>{menu}</>;
};

export const Farewell = () => {
    const {header, headerButton, gptBlock, linkBlock, companyBlock, contactsBlock} = farewellData;

    return (
        <>
        <div className="farewell__header">
            <Header headerData={{header, headerButton}}/>
        </div>
        <div className="farewell__contacts">
            <GptBlock blockData={gptBlock}/>
            <div className="link__block">
                <h3 className="link__header">{linkBlock[0].header}</h3>
                <aside className="link__menu">
                    <ul className="menu">
                        <Menu menuData={linkBlock[1]}/>
                    </ul>
                </aside>
            </div>
            <div className="company__block">
                <h3 className="company__header">{companyBlock[0].header}</h3>
                <aside className="company__menu">
                    <ul className="menu">
                    <Menu menuData={companyBlock[1]}/>
                    </ul>
                </aside>
            </div>
            <div className="contacts__block">
                <h3 className="contacts__header">{contactsBlock[0].header}</h3>
                <aside className="contacts__menu">
                    <ul className="menu">
                    <Menu menuData={contactsBlock[1]}/>
                    </ul>
                </aside>
            </div>
        </div>
        </>
    );
};

export default Farewell;
