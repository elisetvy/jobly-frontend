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
    <>
      <h1 className="whiteWithShadow">Signup</h1>
      <form onSubmit={handleSubmit} className="UserForm">
        <label htmlFor="username" className="UserForm-label">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          className="UserForm-input"
          required
        />
        <label htmlFor="password" className="UserForm-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          className="UserForm-input"
          required
        />
        <label htmlFor="firstName" className="UserForm-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          className="UserForm-input"
          required
        />
        <label htmlFor="lastName" className="UserForm-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          className="UserForm-input"
          required
        />
        <label htmlFor="email" className="UserForm-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="UserForm-input"
          required
        />
        {alerts.length > 0 && <Alerts alerts={alerts} />}
        <button className="UserForm-button">Submit</button>
      </form>
    </>
  );
}
export default SignupForm;
