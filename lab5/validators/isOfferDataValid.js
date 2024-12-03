const { isObjectHasProps } = require("./utils/validators");

const isOfferDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "header", 
        "content",
        "buttonTitle"
    ]);
};

module.exports = isOfferDataValid;