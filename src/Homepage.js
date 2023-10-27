import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Landing page.
 *
 * Props: none
 *
 * State: none
 *
 * App -> Homepage */

function Homepage() {
  const currUser = useContext(userContext);

  return (
    <div className="Homepage h-screen flex flex-col justify-center items-center">
      {currUser ? (
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-3xl font-bold">Welcome back, {currUser.firstName[0].toUpperCase() + currUser.firstName.slice(1)}!</h4>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mb-14">
          <div className="h-[30rem]">
            <dotlottie-player src="https://lottie.host/d4d11d45-53c0-49d0-a8a9-7adbd6526426/D8BzaHeAmF.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
          </div>
          <h1 className="font-bold text-3xl">All the jobs, all in one place.</h1>
          <div className="flex gap-2 mt-6">
            <Link to="/login">
            <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg hover:scale-105">Login</button>
            </Link>
            <Link to="/signup">
            <button className="bg-[#395fd0] font-bold text-slate-50 w-fit px-4 py-2 rounded-lg hover:scale-105">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
