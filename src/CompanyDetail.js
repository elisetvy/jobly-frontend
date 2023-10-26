import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";
import JobCard from "./JobCard";

/** Render company info and job list.
 *
 * Props: none
 *
 * State: company, isLoading
 *
 * CompanyList -> CompanyDetail -> JobCard */

function CompanyDetail() {
  const { handle } = useParams();

  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /**Loads company data on intial render.  */
  useEffect(function getCompanyOnRender() {
    async function getCompany() {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData);
      setIsLoading(false);
    }
    getCompany();
  }, []);

  return (
    <div className="py-20">
      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="text-lg font-bold">{company.name}</h3>
          <p className="">{company.description}</p>
          <div className="mt-4 w-screen flex flex-col items-center">
            {company.jobs.map((j) => (
              <JobCard key={uuid()} job={j} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CompanyDetail;
