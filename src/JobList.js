import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Searchbar from "./Searchbar";

import JoblyApi from "./api";

/**Component listing jobs in JoblyAPI as <JobCards />.
 *
 * Props: none
 *
 * State: jobs, isLoading
 *
 * Consumes Context: None
 *
 * App -> JobList
 */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**Loads jobs data on initial render */
  useEffect(function getJobsOnRender() {
    searchJobs();
  }, []);

  /* Search for jobs based on title and update list on page. */
  async function searchJobs(searchParam) {
    setIsLoading(true);
    const jobsData = searchParam
      ? await JoblyApi.getJobs({ title: searchParam })
      : await JoblyApi.getJobs();
    setJobs(jobsData);
    setIsLoading(false);
  }

  return (
    <>
      <h1 className="whiteWithShadow">Jobs</h1>
      <Searchbar searchType={"job"} search={searchJobs} />
      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <>
          {jobs.map((j) => (
            <JobCard key={j.id} job={j} />
          ))}
        </>
      )}
    </>
  );
}

export default JobList;
