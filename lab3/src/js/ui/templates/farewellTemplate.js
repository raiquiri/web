const createHeaderTemplate = (header, headerButton) => {
    const template = `
    <h1 class="header__discription">${header}</h1>
    <a href="">
        <button class="accsess_button btn">${headerButton}</button>
    </a>
    `;

    return template;
};

const createGptBlockTemplate = ({src, alt, adress, law}) => {
    const template = `
        <div class="gpt_3__block">
            <a href="#" class="logo_gpt_3_link">
                <img src="${src}" alt="${alt}">
            </a>
            <p class="adress">${adress}</p>
            <p class="law">${law}</p>
        </div>
    `;

    return template;
};

const createMenuItemTemplate = (item) => {
    const template = `
        <li class="menu__item">
            <a href="#" class="item__link">${item}</a>
        </li>
    `;

    return template;
};

const createMenuTemplate = (menu) => {
    const menuItems = Object.values(menu);

    const template = menuItems.map((item) => createMenuItemTemplate(item)).join("");

    return template;
};

export const farewellTemplate = ({header, headerButton, gptBlock, linkBlock, companyBlock, contactsBlock}) => {
    const headerTemplate = createHeaderTemplate(header, headerButton);

    
    const gptBlockTemplate = createGptBlockTemplate(gptBlock); 
    const linkBlockTemplate = createMenuTemplate(linkBlock[1]);
    const companyBlockTemplate = createMenuTemplate(companyBlock[1]);
    const contactsBlockTemplate = createMenuTemplate(contactsBlock[1]);

    

    const resultTemplate = `
    <div class="farewell__header">
        ${headerTemplate}
    </div>
    <div class="farewell__contacts">
        ${gptBlockTemplate}
        <div class="link__block">
            <h3 class="link__header">${linkBlock[0].header}</h3>
            <aside class="link__menu">
                <ul class="menu">
                    ${linkBlockTemplate}
                </ul>
            </aside>
        </div>
        <div class="company__block">
            <h3 class="company__header">${companyBlock[0].header}</h3>
            <aside class="company__menu">
                <ul class="menu">
                ${companyBlockTemplate}
                </ul>
            </aside>
        </div>
        <div class="contacts__block">
            <h3 class="contacts__header">${contactsBlock[0].header}</h3>
            <aside class="contacts__menu">
                <ul class="menu">
                ${contactsBlockTemplate}
                </ul>
            </aside>
        </div>
    </div>
    
    `;

    return resultTemplate;
};