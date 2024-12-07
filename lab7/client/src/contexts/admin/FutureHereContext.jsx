import { createContext, useContext, useRef } from "react";
import futureHereData from "../../mockData/futureHereData";

const FutureHereContext = createContext();
const PostFutureHereContext = createContext();

const FutureHereContextProvider = ({ children }) => {
  const data = useRef(futureHereData);
  const postData = async () => {
    try {
      console.log(data.current)
      const response = await fetch("http://localhost:5000/api/cms/future-here", {
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
    <FutureHereContext.Provider value={data.current}>
      <PostFutureHereContext.Provider value={postData}>
        {children}
      </PostFutureHereContext.Provider>
    </FutureHereContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useFutureHereContext = () => useContext(FutureHereContext);
const usePostFutureHereContext = () => useContext(PostFutureHereContext);

export { useFutureHereContext, usePostFutureHereContext };
export default FutureHereContextProvider;
