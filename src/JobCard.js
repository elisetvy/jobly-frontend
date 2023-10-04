import './JobCard.css';

/** Renders component containing job info.
 *
 * Props: job
 *
 * State: none
 *
 * App -> JobList / CompanyDetail -> JobCard
 */

function JobCard({ job }) {
  const { title, companyName, salary, equity } = job;

  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {companyName && <h4>{companyName}</h4>}
      <div className="JobCard-detail">
      {salary && <p>Salary: {salary.toLocaleString()}</p>}
      {equity && <p>Equity: {equity}</p>}
      </div>
    </div>
  )
}

export default JobCard;