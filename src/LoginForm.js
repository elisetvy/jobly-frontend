import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import JoblyApi from "./api";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: "",
    });
    navigate("/");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label htmlFor="username" className="LoginForm-label">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="LoginForm-input"
        />
        <label htmlFor="password" className="LoginForm-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          className="LoginForm-input"
        />
        <button className="LoginForm-button">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
