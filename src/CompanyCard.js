import { Link } from "react-router-dom";

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
    <Link to={`/companies/${handle}`} className="w-2/5">
      <div className="CompanyCard flex gap-x-4 justify-between bg-slate-100 mb-4 px-4 py-4 rounded-lg text-left">
          <div className="CompanyCard-detail flex flex-col">
            <h3 className="text-lg font-bold">{name}</h3>
            <p>{description}</p>
          </div>
          <img src={logoUrl} alt="logo" style={{ visibility: isVisible }} className="h-8"/>
      </div>
    </Link>
  );
}

export default CompanyCard;
