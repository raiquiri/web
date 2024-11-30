const createHeaderTemplate = (header) => {
    const template = `
    <h3 class="law__block">${header}</h3>
    `;

    return template;
};

export const lawTemplate = ({header}) => {
    const resultTemplate = createHeaderTemplate(header);

    return resultTemplate;
};