import { lawData } from "../../mockData/lawData.js";
import { lawTemplate } from "../templates/lawTemplate.js";

export const initLaw = (lawNode) => {
    lawNode.insertAdjacentHTML("beforeend", lawTemplate(lawData));
};

export default initLaw;