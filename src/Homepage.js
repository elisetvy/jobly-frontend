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
    <div className="Homepage w-full flex flex-col justify-center items-center">
      {currUser ? (
        <>
        <h1 className="mt-52 font-bold text-5xl">Jobly</h1>
        <h4 className="mt-4 text-xl">Welcome back, {currUser.firstName}!</h4>
        </>
      ) : (
        <>
          <h1 className="mt-52 font-bold text-3xl">Your dream job is calling. Ready to pick up?</h1>
          <div className="flex gap-2 mt-6">
            <Link to="/login">
              <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg">Signup</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
