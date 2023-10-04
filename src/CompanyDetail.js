import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";
import JobCard from "./JobCard";

/**Component representing an individual company and its jobs.
 *
 * Props: none
 *
 * State: company, isLoading
 *
 * CompanyList -> CompanyDetails
 */

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
    <>
      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="whiteWithShadow">{company.name}</h3>
          <p className="whiteWithShadow">{company.description}</p>
          {company.jobs.map((j) => (
            <JobCard key={uuid()} job={j} />
          ))}
        </>
      )}
    </>
  );
}

export default CompanyDetail;
