export const womanDescriptionTemplate = (text, header, content) => {
    const template = `
    <div class="woman__discription">
        <h3 class="upper__start_up">${text}</h3>
        <h1 class="woman__header">${header}</h1>
        <p class="woman__content">${content}</p>
        <h3 class="lower__start_up">${text}</h3>
    </div>
    `;

    return template;
};

export const renderWomanImage = ({src, alt}) => {
    return `
    <div class="woman__img">
        <img src="${src}" alt="${alt}">
    </div>
    `;
};

export const womanTemplate = ({ womanImage, text, header, content }) => {

    const image = renderWomanImage(womanImage);
    const description = womanDescriptionTemplate(text, header, content);



    const parentTemplate = `
    ${image}
    ${description}
    `;

    return parentTemplate;
};