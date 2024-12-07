import { createContext, useContext, useRef } from "react";
import { heroData } from "../../mockData/heroData";

const HeroContext = createContext();
const PostHeroContext = createContext();

const HeroContextProvider = ({ children }) => {
  const data = useRef(heroData);
  const postData = async () => {
    try {
      console.log(data.current)
      const response = await fetch("http://localhost:5000/api/cms/hero", {
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
    <HeroContext.Provider value={data.current}>
      <PostHeroContext.Provider value={postData}>
        {children}
      </PostHeroContext.Provider>
    </HeroContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useHeroContext = () => useContext(HeroContext);
const usePostHeroContext = () => useContext(PostHeroContext);

export { useHeroContext, usePostHeroContext };
export default HeroContextProvider;
