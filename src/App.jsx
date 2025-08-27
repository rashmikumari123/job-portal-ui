import Navbar from "./components/Navbar";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App()  {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/job/:id" element = {<JobDetails/>}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      <Route path = "/saved" element = {<SavedJobs/>}/>

    </Routes>
    </>
  )
}

export default App;
