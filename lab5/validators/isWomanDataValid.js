const { isObjectHasProps } = require("./utils/validators");

const isWomanDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "womanImage",
        "text",
        "header",
        "content"
    ]);

    const { womanImage } = data;

    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(womanImage, [ "src", "alt" ])
};

module.exports = isWomanDataValid;