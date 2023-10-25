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
        <h3 className="text-lg font-bold">{title}</h3>
        {companyName && <h4 className="font-bold">{companyName}</h4>}
      <div className="JobCard-detail">
      {salary && <p className="mt-2"><b>Salary:</b> {salary.toLocaleString()}</p>}
      {equity > 0 && <p><b>Equity:</b> {equity}</p>}
        </div>
      </div>
      <button className="text-sm bg-blue-200 hover:bg-blue-300 border border-black border-solid py-2 px-6 rounded-lg ">Apply</button>
      </div>
    </div>
  )
}

export default JobCard;