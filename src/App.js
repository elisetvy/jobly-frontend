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

  /** Log in user. */
  async function login(credentials) {
    const token = await JoblyApi.login(credentials);
    setCurrToken(token);
    getUserInfo(token);
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
          <Navbar />
          <RoutesList login={login} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
