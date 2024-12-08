const { isObjectHasProps } = require("./utils/validators");

const isLawDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "header"
    ]);
};

module.exports = isLawDataValid;