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
 * App -> Navbar/RoutesList
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(null);

  /** Register new user. */
  async function signup(newUser) {
    const token = await JoblyApi.signup(newUser);
    setCurrToken(token);
    getUserInfo(token);
  }

  /** Log in user. */
  async function login(credentials) {
    try {
      const token = await JoblyApi.login(credentials);
      setCurrToken(token);
      getUserInfo(token);
    } catch(err) {
      throw err;
    }
  }

  /** Log out user. */
  function logout() {
    setCurrUser(null);
    setCurrToken(null);
    JoblyApi.setToken(null)
  }

  /** Gets info on user. */
  async function getUserInfo(token) {
    const { username } = jwtDecode(token);
    const user = await JoblyApi.getUser(username);
    setCurrUser(user);
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
