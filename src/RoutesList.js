import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
    </Routes>
  )
}

export default RoutesList;