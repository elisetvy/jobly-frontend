import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import userContext from "./userContext";
import jwtDecode from "jwt-decode";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./Loading";
import Navbar from "./Navbar";
import RoutesList from "./RoutesList";
import JoblyApi from "./api";

/** App for viewing and applying for jobs.
 *
 * Props: none
 *
 * State: currUser, currToken
 *
 * Provides Context: userContext
 *
 * App -> Navbar/RoutesList
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(
    localStorage.getItem("token") || ""
  );
  const [loadingUser, setLoadingUser] = useState(true);

  /** Updates currUser when currToken changes. */
  useEffect(
    function updateUserInfo() {
      async function getUserInfo() {
        JoblyApi.token = currToken;
        const { username } = jwtDecode(currToken);
        const user = await JoblyApi.getUser(username);
        setLoadingUser(false);
        setCurrUser(user);
      }

      if (currToken) {
        getUserInfo();
      } else {
        setLoadingUser(false);
      }
    },
    [currToken]
  );

  /** Register new user. */
  async function signup(newUser) {
    const token = await JoblyApi.signup(newUser);
    setCurrToken(token);
    localStorage.setItem("token", token);
  }

  /** Log in user. */
  async function login(credentials) {
    const token = await JoblyApi.login(credentials);
    setLoadingUser(true);
    setCurrToken(token);
    localStorage.setItem("token", token);
  }

  /** Update a user. */
  async function update(updatedUser) {
    const updatedUserData = await JoblyApi.updateUser(
      currUser.username,
      updatedUser
    );
    setCurrUser((c) => ({ ...updatedUserData, applications: c.applications }));
  }

  /** Log out user. */
  function logout() {
    setCurrUser(null);
    setCurrToken(null);
    localStorage.removeItem("token");
    JoblyApi.token = null;
  }

  if (loadingUser === true) {
    return <Loading />;
  }

  return (
    <div className="App relative">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <Navbar logout={logout} />
          <RoutesList login={login} signup={signup} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
