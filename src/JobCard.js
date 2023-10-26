import { useState } from 'react';
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
  const [ applied, setApplied ] = useState(false);

  function applyToJob() {
    setApplied(prev => !prev);
  }

  return (
    <div className="JobCard bg-slate-100 mb-4 w-2/5 px-4 py-4 rounded-lg text-left">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        {companyName && <h4 className="font-bold">{companyName}</h4>}
      <div className="JobCard-detail">
      {salary && <p className="mt-2"><b>Salary:</b> {salary.toLocaleString()}</p>}
      {equity > 0 && <p><b>Equity:</b> {equity}</p>}
        </div>
      </div>
      <button onClick={applyToJob} className={`bg-[#395fd0] text-slate-50 mt-1 text-sm font-bold py-2 px-6 rounded-lg hover:opacity-50`}>{applied === false ? "Apply" : "Applied"}</button>
      </div>
    </div>
  )
}

export default JobCard;