import { createContext, useContext, useReducer } from "react";

const CreateSpaceContext = createContext();

const initialState = {
  step: 1,
  data: {
    title: "",
    description: "",
    price: "",
    images: [],
    address: "",
    city: "",
    country: "",
    amenities: [],
    availability: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_DATA":
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function CreateSpaceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const setData = (payload) => dispatch({ type: "SET_DATA", payload });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <CreateSpaceContext.Provider
      value={{ ...state, nextStep, prevStep, setData, reset }}
    >
      {children}
    </CreateSpaceContext.Provider>
  );
}

export const useCreateSpace = () => useContext(CreateSpaceContext);
