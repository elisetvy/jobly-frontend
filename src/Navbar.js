import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./Navbar.css";

/**Component for top-level navigation between routes.
 *
 * App -> NavBar
 */
function Navbar({ logout }) {
  const currUser = useContext(userContext);

  return (
    <nav className="Navbar">
      <div>
        <NavLink to="/">Jobly</NavLink>
      </div>
      <div>
        {currUser && (
          <>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={logout}>Logout {currUser.username}</button>
          </>
        )}
        {!currUser && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
