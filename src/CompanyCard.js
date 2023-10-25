import { Link } from "react-router-dom";
// import "./CompanyCard.css";

/** Renders component containing company info.
 *
 * Props: company
 *
 * State: none
 *
 * App -> CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  const { name, description, logoUrl, handle } = company;

  let isVisible;
  logoUrl === null ? (isVisible = "hidden") : (isVisible = "visible");

  return (
    <div className="CompanyCard bg-white mb-4 w-2/5 px-4 py-4 rounded-lg text-left">
      <Link to={`/companies/${handle}`}>
        <div className="CompanyCard-detail flex justify-between items-center">
          <h3>{name}</h3>
          <img src={logoUrl} alt="logo" style={{ visibility: isVisible }} className="h-8"/>
        </div>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
