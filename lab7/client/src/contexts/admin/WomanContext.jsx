import { createContext, useContext, useRef } from "react";
import { womanData } from "../../mockData/womanData";

const WomanContext = createContext();
const PostWomanContext = createContext();

const WomanContextProvider = ({ children }) => {
    const data = useRef(womanData);
    const postData = async () => {
        try {
          console.log(data.current)
          const response = await fetch("http://localhost:5000/api/cms/woman", {
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
        <WomanContext.Provider value={data.current}>
            <PostWomanContext.Provider value={postData}>
                {children}
            </PostWomanContext.Provider>
        </WomanContext.Provider>
    );
};

const useWomanContext = () => useContext(WomanContext);
const usePostWomanContext = () => useContext(PostWomanContext);

export { useWomanContext, usePostWomanContext };
export default WomanContextProvider;