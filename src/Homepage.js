// import "./Homepage.css";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

/**Landing page for Jobly.
 *
 * Props: none
 *
 * State: none
 *
 * Consumes Context: userContext
 *
 *App -> Homepage
 */
function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="Homepage border-2 border-black border-solid w-full z-0 flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl">Jobly</h1>
      {currUser ? (
        <h4 className="mt-4 text-xl">Welcome back, {currUser.firstName}!</h4>
      ) : (
        <>
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
