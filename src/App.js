import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import userContext from "./userContext";
import jwtDecode from "jwt-decode";
import logo from "./logo.svg";
import "./App.css";
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
  const [currToken, setCurrToken] = useState(localStorage.getItem("token"));
  const [loadingUser, setLoadingUser] = useState(true);

  /** Updates currUser when currToken changes. */
  useEffect(
    function updateUserInfo() {
      async function getUserInfo(token) {
        const { username } = jwtDecode(token);
        const user = await JoblyApi.getUser(username);
        setLoadingUser(false);
        setCurrUser(user);
      }

      if (currToken) {
        JoblyApi.token = currToken;
        getUserInfo(currToken);
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
    setCurrToken(token);
    localStorage.setItem("token", token);
  }

  /** Log out user. */
  function logout() {
    setCurrUser(null);
    setCurrToken(null);
    localStorage.removeItem("token");
    JoblyApi.token = null;
  }

  if (loadingUser === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <Navbar logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
