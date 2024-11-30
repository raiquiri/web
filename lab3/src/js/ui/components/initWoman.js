import { womanData } from "../../mockData/womanData.js";
import { womanTemplate } from "../templates/womanTemplates.js";

const initWoman = (womanNode) => {
    womanNode.insertAdjacentHTML("beforeend", womanTemplate(womanData));
};

export default initWoman;