import { useState, useCallback } from "react";
import debounce from "lodash.debounce"
import "./Searchbar.css";

/** Reusable searchbar component for Jobly App.
 *
 * Props: searchType, search (fn)
 *
 * State: formData
 *
 * Consumes Context: None
 *
 * CompanyList/JobsList -> SearchBar
 */
function Searchbar({ searchType, search }) {
  const [formData, setFormData] = useState("");

  /**Executes search function after 500ms delay */
  const debouncedFetchData = useCallback(debounce((formData) => {
    search(formData);
  }, 500), []);

  /**Update state based on change in form input */
  function handleChange(evt) {
    setFormData(evt.target.value);
    debouncedFetchData(evt.target.value, 500);
  }

  /**Invokes search function on form submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData.trim());
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
