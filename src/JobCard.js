// import './JobCard.css';

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
    <div className="JobCard bg-white mb-4 w-2/5 px-4 py-4 rounded-lg text-left">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
        <h3 className="mb-1">{title}</h3>
        {companyName && <h4>{companyName}</h4>}
      <div className="JobCard-detail">
      {salary && <p className="mt-2"><b>Salary:</b> {salary.toLocaleString()}</p>}
      {equity > 0 && <p><b>Equity:</b> {equity}</p>}
        </div>
      </div>
      <div className="w-0.5 text-center border border-black border-solid py-2 px-6 rounded-lg ">Apply</div>
      </div>
    </div>
  )
}

export default JobCard;