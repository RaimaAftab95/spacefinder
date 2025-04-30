import { createContext, useReducer, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // user object should include token
};

// Reducer function to handle actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload)); // persist login
      return { user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");

      return { user: null };
    default:
      return state;
  }
};

// Provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside an AuthContextProvider"
    );
  }

  return context;
};
