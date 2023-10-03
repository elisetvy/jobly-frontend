import { useParams } from "react-router-dom";

/**Component representing an individual company and its jobs.
 *
 * CompanyList -> CompanyDetails
 */
function CompanyDetail() {
  const { handle } = useParams();

  return <h1>handle is - {handle}</h1>;
}

export default CompanyDetail;
