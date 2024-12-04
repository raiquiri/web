const { isObjectHasProps } = require("./utils/validators");

const isFarewellDataValid = (data) => {
     // проверяем объект на наличие полей и соответствие типу "объект"
     isObjectHasProps(data, [
        "header",
        "headerButton",
        "gptBlock",
        "linkBlock",
        "companyBlock",
        "contactsBlock"
     ]);

     const { gptBlock, linkBlock, companyBlock, contactsBlock } = data;

     // проверяем объект на наличие полей и соответствие типу "объект"
     isObjectHasProps(gptBlock, ["src", "alt", "adress", "law"]);
     isObjectHasProps(linkBlock, ["header", "item1", "item2", "item3", "item4"]);
     isObjectHasProps(companyBlock, ["header", "item1", "item2", "item3"]);
     isObjectHasProps(contactsBlock, ["header", "item1", "item2", "item3"]);
};

module.exports = isFarewellDataValid;