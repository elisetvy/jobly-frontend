import { useState, useContext } from "react";
import userContext from "./userContext";
// import "./UserForm.css";
import Alerts from "./Alerts";

/**Form for a logged in user to edit their profile.
 *
 * Props: update (fn)
 *
 * State: formData, alerts
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

  const [alerts, setAlerts] = useState({
    messages: [],
    type: "",
  });

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
      await update({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      setAlerts([{
        message: ["Your changes have been saved"],
        type: "success",
      }]);
    } catch (err) {
      setAlerts(err);
    }
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-1/4 bg-stone-100 px-6 py-6 rounded-lg">
        <label htmlFor="username" className="text-left px-1 mt-2 font-bold">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          className="px-2 py-1 rounded-lg mb-2 bg-[#a1d6e4] opacity-50"
          disabled
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
        <button className="bg-[#a1d6e4] w-fit px-4 py-2 rounded-lg mt-2 ml-auto mr-auto"><b>Submit</b></button>
      </form>
    </div>
  );
}

export default ProfileForm;