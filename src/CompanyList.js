import { useState, useEffect } from "react";
import JoblyApi from "./api";
import Searchbar from "./Searchbar";
import CompanyCard from "./CompanyCard";

/** Renders CompanyList component containing CompanyCards.
 *
 * Props: none
 *
 * State: companies, isLoading
 *
 * App -> CompanyList -> CompanyCard(s)
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**Loads company data on initial render of the component */
  useEffect(function getCompaniesOnRender() {
    searchCompanies();
  }, []);

  /* Search for companies based on company name and update list on page. */
  async function searchCompanies(searchParam) {
    setIsLoading(true);
    const companiesData = searchParam
      ? await JoblyApi.getCompanies({
          nameLike: searchParam,
        })
      : await JoblyApi.getCompanies();
    setCompanies(companiesData);
    setIsLoading(false);
  }

  return (
    <>
      <h1 className="whiteWithShadow">Companies</h1>
      <Searchbar searchType={"company"} search={searchCompanies} />
      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <>
          {companies.map((c) => (
            <CompanyCard key={c.handle} company={c} />
          ))}
        </>
      )}
    </>
  );
}

export default CompanyList;