const createHeaderTemplate = (header) => {
    return `
    <h1 class="blog__header">${header}</h1>
    `;
};

const createArcticleTemplate = ({img, alt, date, content, offer}) => {
    const template = `
    <img src="${img}" alt="${alt}">
    <div class="article__discription">
        <p class="article__date">${date}</p>
        <h3 class="article__header">${content}</h3>
        <p class="article__offer">${offer}</p>
    </div>
    `;

    return template;
};

export const blogTempalate = ({header, articles}) => {
    const headerTemplate = createHeaderTemplate(header);
    
    const [first, second, third, fourth, fifth] = articles;
    const firtsTemplate = createArcticleTemplate(first);
    const secondTemplate = createArcticleTemplate(second);
    const thirdTemplate = createArcticleTemplate(third);
    const fourthTemplate = createArcticleTemplate(fourth);
    const fifthTemplate = createArcticleTemplate(fifth);


    const resultTemplate = `
    <h1 class="blog__header">${headerTemplate}</h1>
    <div class="blog__discription">
        <div class="first__column">${firtsTemplate}</div>  
        <div class="second__column">
            <div class="second__article">${secondTemplate}</div>
            <div class="third__article">${thirdTemplate}</div>
        </div>
        <div class="third__column">
            <div class="fourth__article">${fourthTemplate}</div>
            <div class="fifth__article">${fifthTemplate}</div>
            </div>
        </div>
    <div>
    `;

    return resultTemplate;
};