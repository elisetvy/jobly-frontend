import { useState } from "react";
import "./Searchbar.css";

function Searchbar({ searchType, search }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

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
