import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Explore from "./pages/explore/Explore";
import SpaceDetails from "./pages/space/SpaceDetails";
// import Dashboard from "./pages/dashboard/DashboardHome";
import CreateSpaceLayout from "./pages/create/CreateSpaceLayout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/space/:id" element={<SpaceDetails />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/create" element={<CreateSpaceLayout />} />
      </Routes>
    </>
  );
}

export default App;
