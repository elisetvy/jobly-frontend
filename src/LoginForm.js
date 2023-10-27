import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "./Alerts";

/** Form for logging in.
 *
 * Props: login (fn)
 *
 * State: formData, alerts
 *
 * App -> RouteList -> LoginForm */

function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [alerts, setAlerts] = useState({
    messages: [],
    type: "",
  });

  const navigate = useNavigate();

  /** Update state based on form input change. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /** Handle form submission. Redirect to home on success / render alert with invalid credentials. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setAlerts(err);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4 bg-slate-100 px-6 py-6 rounded-lg">
        <label htmlFor="username" className="text-left px-1 mt-2 font-bold">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          className="px-2 py-1 rounded-lg mb-2"
          required
        />
        <label htmlFor="password" className="text-left px-1 mt-2 font-bold">
          Password
        </label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          className="px-2 py-1 rounded-lg mb-2"
          required
        />
        {alerts.length > 0 && <Alerts alerts={alerts} />}
        <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg mt-2 ml-auto mr-auto hover:scale-105">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
