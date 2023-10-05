import { Routes, Route, Navigate } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";

import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

/** Component for defining routes.
 *
 * Props: login, signup
 *
 * State: none
 *
 * Consumes Context: userContext
 *
 * App -> RoutesList
 */

function RoutesList({ login, signup }) {
  const currUser = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {!currUser && (
        <>
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </>
      )}
      {currUser && (
        <>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
