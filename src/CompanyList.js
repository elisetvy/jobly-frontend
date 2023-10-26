import { useState, useEffect } from "react";
import JoblyApi from "./api";
import Searchbar from "./Searchbar";
import CompanyCard from "./CompanyCard";
import Loading from "./Loading";

/** Render company list.
 *
 * Props: none
 *
 * State: companies, isLoading, currSearch
 *
 * App -> CompanyList -> CompanyCard */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currSearch, setCurrSearch] = useState("");

  /** Load company data on initial render. */
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
    <div className="py-20">
      <h1 className="mb-4 text-3xl font-bold">Companies</h1>
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
    </div>
  );
}

export default CompanyList;
