import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ooops...</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="btn primary-btn">Вернуться на главную страницу</a>
    </div>
  );
};

export default ErrorPage;
