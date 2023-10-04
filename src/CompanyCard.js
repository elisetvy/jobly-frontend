import { Link } from "react-router-dom";
import "./CompanyCard.css";

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
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <div className="CompanyCard-detail">
          <h3>{name}</h3>
          <img src={logoUrl} alt="logo" style={{ visibility: isVisible }} />
        </div>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
