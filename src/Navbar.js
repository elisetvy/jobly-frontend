import { NavLink } from "react-router-dom";
import "./Navbar.css";

/**Component for top-level navigation between routes.
 *
 * App -> NavBar
 */
function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <NavLink to="/">Jobly</NavLink>
      </div>
      <div>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
