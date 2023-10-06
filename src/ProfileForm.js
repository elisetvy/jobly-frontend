import { useState, useContext } from "react";
import userContext from "./userContext";
import "./UserForm.css";
import Alerts from "./Alerts";

/**Form for a logged in user to edit their profile.
 *
 * Props:
 *
 * State: formData, errors
 *
 * Consumes Context: userContext
 *
 * RoutesList -> ProfileForm
 */
function ProfileForm({ update }) {
  const currUser = useContext(userContext);

  const [formData, setFormData] = useState({
    username: currUser.username,
    firstName: currUser.firstName,
    lastName: currUser.lastName,
    email: currUser.email,
  });

  const [errors, setErrors] = useState([]);
  const [alerts, setAlerts] = useState([]);

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
        delete formData.username;
        await update(currUser.username, formData);
        setAlerts([{message: "Your changes have been saved"}]);
      } catch (err) {
        setErrors(err);
      }
    }

    return (
      <>
        <h1 className="whiteWithShadow">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="UserForm">
          <label htmlFor="username" className="UserForm-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="UserForm-input"
            disabled
          />
          <label htmlFor="firstName" className="UserForm-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
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
            className="UserForm-input"
            required
          />
          {alerts.length > 0 && <Alerts errors={alerts} />}
          {errors.length > 0 && <Alerts errors={errors} />}
          <button className="UserForm-button">Submit</button>
        </form>
      </>
    );
}

export default ProfileForm;
