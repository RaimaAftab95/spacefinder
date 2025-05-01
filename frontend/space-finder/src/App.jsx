import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Explore from "./pages/explore/Explore";
import SpaceDetails from "./pages/space/SpaceDetails";
// import Dashboard from "./pages/dashboard/DashboardHome";
import CreateSpaceLayout from "./pages/create/CreateSpaceLayout";
import { CreateSpaceProvider } from "./context/CreateSpaceContext";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/space/:id" element={<SpaceDetails />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/create"
            element={
              <CreateSpaceProvider>
                <CreateSpaceLayout />
              </CreateSpaceProvider>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

// {
//     "message": "Login successful",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDc0ODFhNjQ0MjhmNmIxN2Q4NGY3MyIsImlhdCI6MTc0NTc0MTc1OCwiZXhwIjoxNzQ2MzQ2NTU4fQ.67QznFLl9u8b9vaiCX0VfLud9qB8xR7rSpJJdlwqaJc",
//     "user": {
//         "id": "6807481a64428f6b17d84f73",
//         "name": "Raima Aftab",
//         "email": "raima@example.com"
//     }
// }

// {
//     "message": "User registered successfully",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGRkYzk4YWE2MmZhNWVkODA3YjNmMyIsImlhdCI6MTc0NTczODkwNCwiZXhwIjoxNzQ2MzQzNzA0fQ.YMcE1lr8KbVQpwYa39gdnVU7CmMiKp2U5pCQx-jcWo0",
//     "user": {
//         "id": "680ddc98aa62fa5ed807b3f3",
//         "name": "shuja",
//         "email": "shuja@example.com"
//     }
// }

// {
//     "message": "Login successful",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGRkYzk4YWE2MmZhNWVkODA3YjNmMyIsImlhdCI6MTc0NTc0NzU1MCwiZXhwIjoxNzQ2MzUyMzUwfQ.SRq7OmJjwRzgWI1an9u3-T2H7eWkmZzEnVIQggsFYw4",
//     "user": {
//         "id": "680ddc98aa62fa5ed807b3f3",
//         "name": "shuja",
//         "email": "shuja@example.com"
//     }
// }
