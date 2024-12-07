import { createContext, useContext, useRef } from "react";
import { lawData } from "../../mockData/lawData";

const LawContext = createContext();
const PostLawContext = createContext();

const LawContextProvider = ({ children }) => {
    const data = useRef(lawData);
    const postData = async () => {
        try {
          console.log(data.current)
          const response = await fetch("http://localhost:5000/api/cms/law", {
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
        <LawContext.Provider value={data.current}>
            <PostLawContext.Provider value={postData}>
                {children}
            </PostLawContext.Provider>
        </LawContext.Provider>
    );
};

const useLawContext = () => useContext(LawContext);
const usePostLawContext = () => useContext(PostLawContext);

export { useLawContext, usePostLawContext };
export default LawContextProvider;