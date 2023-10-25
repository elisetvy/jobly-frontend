import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
// import "./Navbar.css";

/**Component for top-level navigation between routes.
 *
 * Props: logout (fn)
 *
 * State: None
 *
 * Consumes Context: userContext
 *
 * App -> NavBar
 */
function Navbar({ logout }) {
  const currUser = useContext(userContext);

  return (
    <nav className="Navbar flex justify-between px-6 py-6">
      <div className="flex items-center">
        <NavLink to="/" className="text-xl font-bold text-black">Jobly</NavLink>
        <em className="ml-12 text-md">All the jobs, all in one place.</em>
      </div>
      <div>
        {currUser && (
          <div className="flex">
            <NavLink to="/companies" className="font-bold ">Companies</NavLink>
            <NavLink to="/jobs"className="ml-6 font-bold text-black">Jobs</NavLink>
            <NavLink to="/profile" className="ml-6 font-bold text-black">Profile</NavLink>
            <button onClick={logout} className="Navbar-logout ml-6 italic text-black hover:underline">
              Logout {currUser.username}
            </button>
          </div>
        )}
        {!currUser && (
          <>
            <NavLink to="/login" className="ml-6 text-black">Login</NavLink>
            <NavLink to="/signup" className="ml-6 text-black">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
