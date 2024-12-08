import { createContext, useContext, useRef, useState } from "react";
import { lawData } from "../../mockData/lawData";

// настройки для запроса
const controller = new AbortController();
const signal = controller.signal;
const endpoint = "law";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const LawContext = createContext();
const PostLawContext = createContext();

const LawContextProvider = ({ children }) => {
    const data = useRef(lawData);
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

  const postData = async () => {
    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;
    options.body = JSON.stringify(data.current);

    const fetchData = async () => {
      setIsPostDataLoading(true);

      try {
        const response = await fetch(url, options, signal);

        const jsonData = await response.json();

        if (!response.ok) {
          setIsPostDataError(true);
          setPostDataError(jsonData.error);
          return;
        }

        setIsPostDataError(false);
        setPostDataError(null);
      } catch (error) {
        setIsPostDataError(true);
        setPostDataError(error.message);
      }

      setIsPostDataLoading(false);

      return {
        isPostDataLoading,
        isPostDataError,
        postDataError,
      };
    };

        return await fetchData();
    };

    // Возвращаем 2 контекста
    // 1 - для получения данных
    // 2 - для отправки данных на сервер и получения результата

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