import { useState, useEffect } from "react";
import JoblyApi from "./api";
import Searchbar from "./Searchbar";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";

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
  const [currSearch, setCurrSearch] = useState("");

  /**Loads company data on initial render of the component */
  useEffect(function getCompaniesOnRender() {
    searchCompanies();
  }, []);

  /* Search for companies based on company name and update list on page. */
  async function searchCompanies(searchParam) {
    setIsLoading(true);
    setCurrSearch(searchParam)
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
      <h1 className="mb-4">Companies</h1>
      <Searchbar searchType={"company"} search={searchCompanies} />
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center">
        {companies.length === 0 && <h3 className="">Sorry, no
        companies match: {currSearch}.</h3>}

        {companies.map((c) => (
          <CompanyCard key={c.handle} company={c} />
        ))}
        </div>
      )}
    </>
  );
}

export default CompanyList;
