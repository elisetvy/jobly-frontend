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
          <div className="h-[24rem] mt-10">
            <dotlottie-player src="https://lottie.host/d4d11d45-53c0-49d0-a8a9-7adbd6526426/D8BzaHeAmF.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
          <h4 className="mt-4 text-3xl font-bold">Welcome back, {currUser.firstName[0].toUpperCase() + currUser.firstName.slice(1)}!</h4>
        </>
      ) : (
        <>
          <div className="h-[24rem] mt-6">
            <dotlottie-player src="https://lottie.host/d4d11d45-53c0-49d0-a8a9-7adbd6526426/D8BzaHeAmF.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
          <h1 className="mt-6 font-bold text-3xl">All the jobs, all in one place.</h1>
          <div className="flex gap-2 mt-4">
            <Link to="/login">
            <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg hover:opacity-50">Login</button>
            </Link>
            <Link to="/signup">
            <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg hover:opacity-50">Sign Up</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
