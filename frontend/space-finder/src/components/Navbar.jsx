// import { Link } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

// export default function Navbar() {
//   const { user, dispatch } = useAuthContext();

//   const logout = () => {
//     dispatch({ type: "LOGOUT" });
//     localStorage.removeItem("user");
//   };

//   return (
//     <nav className="flex justify-between items-center p-4 shadow-md bg-white">
//       <Link to="/" className="text-xl font-bold text-indigo-600">
//         SpaceFinder
//       </Link>
//       <div className="space-x-4">
//         {user ? (
//           <>
//             <Link
//               to="/dashboard"
//               className="text-gray-700 hover:text-indigo-600"
//             >
//               Dashboard
//             </Link>
//             <Link to="/create" className="text-gray-700 hover:text-indigo-600">
//               Create Space
//             </Link>
//             <button onClick={logout} className="text-red-500">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="text-gray-700 hover:text-indigo-600">
//               Login
//             </Link>
//             <Link to="/signup" className="text-gray-700 hover:text-indigo-600">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

export default function Navbar() {
  const { state, dispatch } = useAuthContext();

  // Rehydrate user data from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
    }
  }, [dispatch]);

  // Handle logout
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user"); // Clear user data from localStorage
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        SpaceFinder
      </Link>
      <div className="space-x-4">
        {state.user ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-indigo-600"
            >
              Dashboard
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-indigo-600">
              Create Space
            </Link>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-indigo-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
