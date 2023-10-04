import './JobCard.css';

function JobCard({ job }) {
  const { title, companyName, salary, equity } = job;

  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {companyName && <h4>{companyName}</h4>}
      <div className="JobCard-detail">
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      </div>
    </div>
  )
}

export default JobCard;