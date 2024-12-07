import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // fetch data

    navigate("home");
  };

  return (
    <div className="section admin_section">
      <form className="form">
        <h1>Авторизация</h1>
        <div className="polya_vvoda">
          <label htmlFor="login">
            <span>Логин</span>
            <input
              name="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <span>Пароль</span>
            <input
              name="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="special_for_button">
          <input className="btn primary-btn" type="button" value="Войти" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
