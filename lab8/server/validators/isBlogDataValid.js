const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "header",
        "articles"
    ]);

    const { articles } = data;
    // проверяем внутренний массив на наличие полей и соответствие типу "массив"
    isArrayHasLength(articles);

    // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
    articles.forEach((item) => isObjectHasProps(item, [ "img", "alt", "date", "content", "offer"]));
};

module.exports = isBlogDataValid;
