import { createContext, useContext, useRef, useState } from "react";
import { farewellData } from "../../mockData/farewellData";

// настройки для запроса
const controller = new AbortController();
const signal = controller.signal;
const endpoint = "farewell";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const FarewellContext = createContext();
const PostFarewellContext = createContext();

const FarewellContextProvider = ({ children }) => {
    const data = useRef(farewellData);
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