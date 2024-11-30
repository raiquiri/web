export const createHeaderTemplate = (header) => {
    return `
    <p class="offer__header">${header}</p>
    `;
};

export const createContentTemplate = (content) => {
    return `
    <h3 class="offer__content">${content}</h3>
    `;
};

export const createButtonTempalte = (buttonTitle) => {
    return `
    <a href="">
        <button class="start_button btn">${buttonTitle}</button>
    </a>
    `;
};

export const offerTemplate = ({ header, content, buttonTitle}) => {
    const headerTemplate = createHeaderTemplate(header);
    const contentTemplate = createContentTemplate(content);
    const buttonTemplate = createButtonTempalte(buttonTitle);

    const resultTemplate = `
    <div class="offer__discription">
        ${headerTemplate}
        ${contentTemplate}
    </div>
    ${buttonTemplate}
    `;

    return resultTemplate;
};