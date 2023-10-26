import { useState, useCallback } from "react";
import debounce from "lodash.debounce";

/** Search bar (live search).
 *
 * Props: searchType, search (fn)
 *
 * State: formData
 *
 * CompanyList / JobsList -> SearchBar */

function Searchbar({ searchType, search }) {
  const [formData, setFormData] = useState("");

  /** Execute search function after 500ms delay. */
  const debouncedFetchData = useCallback(
    debounce((formData) => {
      search(formData);
    }, 500),
    []
  );

  /** Update state based on change in form input. */
  function handleChange(evt) {
    setFormData(evt.target.value);
    debouncedFetchData(evt.target.value.trim(), 500);
  }

  /** Prevent page from reloading on submission. */
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="Searchbar">
      <input
        value={formData}
        placeholder={`Search for a ${searchType}...`}
        onChange={handleChange}
        className="Searchbar-input px-2 py-2 w-1/4 border border-black border rounded-lg mb-4"
      ></input>
    </form>
  );
}

export default Searchbar;
