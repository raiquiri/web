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
     isObjectHasProps(linkBlock[0], ["header"]);
     isObjectHasProps(linkBlock[1], ["item1", "item2", "item3", "item4"]);
     isObjectHasProps(companyBlock[0], ["header"]);
     isObjectHasProps(companyBlock[1], ["item1", "item2", "item3"]);
     isObjectHasProps(contactsBlock[0], ["header"]);
     isObjectHasProps(contactsBlock[1], ["item1", "item2", "item3"]);
};

module.exports = isFarewellDataValid;