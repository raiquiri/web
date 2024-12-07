import { createContext, useContext, useRef } from "react";
import whatIsGptData from "../../mockData/whatIsGptData";

const WhatIsChatGptContext = createContext();
const PostWhatIsChatGptContext = createContext();

const WhatIsChatGptContextProvider = ({ children }) => {
  const data = useRef(whatIsGptData);
  const postData = async () => {
    try {
      console.log(data.current)
      const response = await fetch("http://localhost:5000/api/cms/what-is-gpt", {
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
    <WhatIsChatGptContext.Provider value={data.current}>
      <PostWhatIsChatGptContext.Provider value={postData}>
        {children}
      </PostWhatIsChatGptContext.Provider>
    </WhatIsChatGptContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useWhatIsChatGptContext = () => useContext(WhatIsChatGptContext);
const usePostWhatIsChatGptContext = () => useContext(PostWhatIsChatGptContext);

export { useWhatIsChatGptContext, usePostWhatIsChatGptContext };
export default WhatIsChatGptContextProvider;
