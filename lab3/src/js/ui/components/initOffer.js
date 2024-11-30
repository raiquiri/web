import { offerData } from "../../mockData/offerData.js";
import { offerTemplate } from "../templates/offerTemplate.js";

const initOffer = (offerNode) => {
    offerNode.insertAdjacentHTML("beforeend", offerTemplate(offerData));
};

export default initOffer;