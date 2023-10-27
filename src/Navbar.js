import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import logo from "./logo.png";

/** Navigation bar.
 *
 * Props: logout (fn)
 *
 * State: none
 *
 * App -> NavBar */

function Navbar({ logout }) {
  const currUser = useContext(userContext);

  return (
    <nav className="Navbar w-screen flex items-center justify-between px-6 py-4 fixed">
      <div className="flex items-center">
        <NavLink to="/" className="text-xl font-bold flex items-center gap-2">
        <div className="bg-[#395fd0] px-2 py-2 rounded-full">
        <img className="h-6 invert" src={logo} alt="logo"/>
        </div>
        <div className="text-xl font-bold">Jobly</div>
        </NavLink>
      </div>
      <div>
        {currUser && (
          <div className="flex">
            <NavLink to="/companies" className="font-bold hover:underline">Companies</NavLink>
            <NavLink to="/jobs"className="ml-6 font-bold hover:underline">Jobs</NavLink>
            <NavLink to="/profile" className="ml-6 font-bold hover:underline" >Profile</NavLink>
            <button onClick={logout} className="Navbar-logout ml-6 italic">
              Logout {currUser.username}
            </button>
          </div>
        )}
        {!currUser && (
          <>
            <NavLink to="/login" className="ml-6 font-bold">Login</NavLink>
            <NavLink to="/signup" className="ml-6 font-bold">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
