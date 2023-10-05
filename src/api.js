const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = null;

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      "content-type": "application/json",
    };

    url.search = method === "GET" ? new URLSearchParams(data).toString() : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = method !== "GET" ? JSON.stringify(data) : undefined;

    const resp = await fetch(url, { method, body, headers });

    //fetch API does not throw an error, have to dig into the resp for msgs
    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const { error } = await resp.json();
      throw Array.isArray(error) ? error : [error];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies. */

  static async getCompanies(searchParams = {}) {
    const res = await this.request(`companies`, searchParams);
    return res.companies;
  }

  /** Get details on a job by id. */

  static async getJob(id) {
    const res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /** Get all jobs. */

  static async getJobs(searchParams = {}) {
    const res = await this.request(`jobs`, searchParams);
    return res.jobs;
  }

  /** Register a user with form data. */

  static async signup(newUser) {
    const res = await this.request("auth/register", newUser, "POST");
    return res.token;
  }

  /** Log in user with credentials. */

  static async login(credentials) {
    const res = await this.request("auth/token", credentials, "POST");
    return res.token;
  }

  /** Get user by username. */

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
