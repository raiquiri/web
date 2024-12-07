import { createContext, useContext, useRef } from "react";
import { offerData } from "../../mockData/offerData";

const OfferContext = createContext();
const PostOfferContext = createContext();

const OfferContextProvider = ({ children }) => {
    const data = useRef(offerData);
    const postData = async () => {
        try {
          console.log(data.current)
          const response = await fetch("http://localhost:5000/api/cms/offer", {
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
        <OfferContext.Provider value={data.current}>
            <PostOfferContext.Provider value={postData}>
                {children}
            </PostOfferContext.Provider>
        </OfferContext.Provider>
    );
};

const useOfferContext = () => useContext(OfferContext);
const usePostOfferContext = () => useContext(PostOfferContext);

export { useOfferContext, usePostOfferContext };
export default OfferContextProvider;