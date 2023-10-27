import { useState, useContext } from "react";
import userContext from "./userContext";
import Alerts from "./Alerts";

/** Form for a logged in user to edit their profile.
 *
 * Props: update (fn)
 *
 * State: formData, alerts
 *
 * RoutesList -> ProfileForm */

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

  /** Update state based on form input change. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /** Handle form submission. Render alert with success / error message. */
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
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl font-bold">Edit Profile</h1>
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
          className="px-2 py-1 rounded-lg mb-2 bg-indigo-100 opacity-50"
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
        <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg mt-2 ml-auto mr-auto hover:scale-105">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;