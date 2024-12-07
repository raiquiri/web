import { createContext, useContext, useRef } from "react";
import brandsData from "../../mockData/brandsData";

const BrandsContext = createContext();
const PostBrandsContext = createContext();

const BrandsContextProvider = ({ children }) => {
  const data = useRef(brandsData);
  const postData = async () => {
    try {
      console.log(data.current)
      const response = await fetch("http://localhost:5000/api/cms/brands", {
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
  // Возвращаем 2 контекста
  // 1 - для получения данных
  // 2 - для отправки данных на сервер и получения результата
  return (
    <BrandsContext.Provider value={data.current}>
      <PostBrandsContext.Provider value={postData}>
        {children}
      </PostBrandsContext.Provider>
    </BrandsContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useBrandsContext = () => useContext(BrandsContext);
const usePostBrandsContext = () => useContext(PostBrandsContext);

export { useBrandsContext, usePostBrandsContext };
export default BrandsContextProvider;
