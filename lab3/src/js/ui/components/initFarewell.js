import { farewellData } from "../../mockData/farewellData.js";
import { farewellTemplate } from "../templates/farewellTemplate.js";

const initFarewell = (farewellNode) => {
    farewellNode.insertAdjacentHTML("beforeend", farewellTemplate(farewellData));
};

export default initFarewell;