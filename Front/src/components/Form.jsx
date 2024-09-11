import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/api";
import "../sass/components/_Form.scss";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userInformation = { email, password };

    try {
      const result = await dispatch(loginUser(userInformation));
      if (result.payload) {
        setEmail("");
        setPassword("");

        if (rememberMe) {
          sessionStorage.setItem("rememberedEmail", email);
          sessionStorage.setItem("rememberedPassword", password);
        }

        navigate("/profile");
      }
    } catch (error) {
      setError("Erreur dans l'email et/ou le mot de passe");
      console.error(error);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa-solid fa-circle-user"></i>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
}

export default Form;
