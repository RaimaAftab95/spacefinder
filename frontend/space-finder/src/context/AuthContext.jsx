import { createContext, useReducer, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

// Reducer function to handle actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// Provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Save user to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
