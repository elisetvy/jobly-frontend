import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";
import Alerts from "./Alerts";

/**Form for new users to signup in Jobly.
 *
 * Props: signup (fn)
 *
 * State: formData, alerts
 *
 * RoutesList -> Signupform
 */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [alerts, setAlerts] = useState({
    messages: [],
    type: "",
  });

  const navigate = useNavigate();

  /**Updates state based on form input change */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /**Handles form submission. Redirects to home on success, renders error
   * alerts with invalid signup info.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setAlerts(err);
    }
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold">Signup</h1>
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
        <label htmlFor="firstName" className="text-left px-1 mt-2 font-bold">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          className="px-2 py-1 rounded-lg mb-2"
          required
        />
        <label htmlFor="lastName" className="text-left px-1 mt-2 font-bold">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          className="px-2 py-1 rounded-lg mb-2"
          required
        />
        <label htmlFor="email" className="text-left px-1 mt-2 font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="px-2 py-1 rounded-lg mb-2"
          required
        />
        {alerts.length > 0 && <Alerts alerts={alerts} />}
        <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg mt-2 ml-auto mr-auto hover:opacity-50">Submit</button>
      </form>
    </div>
  );
}
export default SignupForm;
