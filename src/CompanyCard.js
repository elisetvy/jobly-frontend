import './CompanyCard.css';

function CompanyCard({ company }) {
  const { name, description, logoUrl } = company;

  let isVisible;
  logoUrl === null ? isVisible = "hidden" : isVisible = "visible";

  return (
    <div className="CompanyCard">
      <div className="CompanyCard-detail">
        <h3>{name}</h3>
        <img src={logoUrl} alt="logo" style={{ visibility: isVisible }} />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default CompanyCard;