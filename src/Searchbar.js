import { useState } from "react";
import "./Searchbar.css";

function Searchbar({ searchType, search }) {
  const [formData, setFormData] = useState("");

  /**Update state based on change in form input */
  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /**Invokes search function on form submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }

  return (
    <form onSubmit={handleSubmit} className="Searchbar">
      <input
        value={formData}
        placeholder={`Search for a ${searchType}...`}
        onChange={handleChange}
        className="Searchbar-input"
      ></input>
      <button className="Searchbar-button">Search</button>
    </form>
  );
}

export default Searchbar;
