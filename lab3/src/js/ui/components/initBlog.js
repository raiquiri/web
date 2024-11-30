import { blogData } from "../../mockData/blogData.js";
import { blogTempalate } from "../templates/blogTemplates.js";

const initBlog = (blogNode) => {
    blogNode.insertAdjacentHTML("beforeend", blogTempalate(blogData));
};

export default initBlog;