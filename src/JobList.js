import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Searchbar from "./Searchbar";
import JoblyApi from "./api";
import Loading from "./Loading";

/** Render job list.
 *
 * Props: none
 *
 * State: jobs, isLoading, currSearch
 *
 * App -> JobList -> JobCard */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currSearch, setCurrSearch] = useState("");

  /** Load job data on initial render. */
  useEffect(function getJobsOnRender() {
    searchJobs();
  }, []);

  /* Search for jobs based on title and update list on page. */
  async function searchJobs(searchParam) {
    setIsLoading(true);
    setCurrSearch(searchParam)
    const jobsData = searchParam
      ? await JoblyApi.getJobs({ title: searchParam })
      : await JoblyApi.getJobs();
    setJobs(jobsData);
    setIsLoading(false);
  }

  return (
    <div className="py-20">
      <h1 className="mb-4 text-3xl font-bold">Jobs</h1>
      <Searchbar searchType={"job"} search={searchJobs} />
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center">
        {jobs.length === 0 && <h3 className="">Sorry, no
        jobs match: {currSearch}.</h3>}

        {jobs.map((j) => (
          <JobCard key={j.id} job={j} />
        ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
