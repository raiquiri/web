import { createContext, useContext, useRef } from "react";
import { blogData } from "../../mockData/blogData";

const BlogContext = createContext();
const PostBlogContext = createContext();

const BlogContextProvider = ({ children  }) => {
    const data = useRef(blogData);
    const postData = async () => {
        try {
          console.log(data.current)
          const response = await fetch("http://localhost:5000/api/cms/blog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data.current), // Отправляем данные из контекста
          });
    
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.statusText}`);
          }
    
          // Если нужно обработать ответ от сервера
          const result = await response.json();
          return { isPostDataError: false, postDataError: null, result };
        } catch (error) {
          console.error("Ошибка при отправке POST-запроса:", error);
          return { isPostDataError: true, postDataError: error.message };
        }
      };
    return (
        <BlogContext.Provider value={data.current}>
            <PostBlogContext.Provider value={postData}>
                {children}
            </PostBlogContext.Provider>
        </BlogContext.Provider>
    );
};

const useBlogContext = () => useContext(BlogContext);
const usePostBlogContext = () => useContext(PostBlogContext);

export { useBlogContext, usePostBlogContext };
export default BlogContextProvider;