import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDashboard from "./components/Users/UserDashboard";
import AnnouncementDashboard from "./components/Announcements/AnnouncementDashboard";
import PlacementDashboard from "./components/Placement/PlacementDashboard";
import StaffDashboard from "./components/Staff/StaffDashboard";
import StudentDashboard from "./components/Students/StudentsDashboard";
import StudentForm from "./components/Students/StudentCreate";
import StaffForm from "./components/Staff/StaffCreate";
import PlacementForm from "./components/Placement/PlacementCreate";
import AnnouncementForm from "./components/Announcements/Announcement";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AnnouncementDashboard/>} />
        <Route path="/announcCreate" element={<AnnouncementForm/>} />
        <Route path="/placements" element={<PlacementDashboard/>} />
        <Route path="/placementCreate" element={<PlacementForm/>} />
        <Route path="/staff" element={<StaffDashboard/>} />
        <Route path="/staffCreate" element={<StaffForm/>} />
        <Route path="/students" element={<StudentDashboard/>} />
        <Route path="/addStudent" element={<StudentForm/>} />
        <Route path="/users" element={<UserDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
