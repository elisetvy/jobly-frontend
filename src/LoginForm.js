import { useState } from "react";
import "./LoginForm.css";
import JoblyApi from "./api";

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default LoginForm;
