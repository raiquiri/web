import { createContext, useContext, useRef } from "react";
import { farewellData } from "../../mockData/farewellData";

const FarewellContext = createContext();
const PostFarewellContext = createContext();

const FarewellContextProvider = ({ children }) => {
    const data = useRef(farewellData);
    const postData = async () => {
        try {
          console.log(data.current)
          const response = await fetch("http://localhost:5000/api/cms/farewell", {
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
        <FarewellContext.Provider value={data.current}>
            <PostFarewellContext.Provider value={postData}>
                {children}
            </PostFarewellContext.Provider>
        </FarewellContext.Provider>
    );
};

const useFarewellContext = () => useContext(FarewellContext);
const usePostFarewellContext = () => useContext(PostFarewellContext);

export { useFarewellContext, usePostFarewellContext};
export default FarewellContextProvider;