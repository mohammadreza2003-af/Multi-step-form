import { createContext, useReducer, useContext } from "react";
import { TypeinitailState, TypeValue, Action, ProviderProps } from "./types";

const initailState: TypeinitailState = {
  step: 0,
  formInfo: {
    userInfo: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    plan: {
      typePlan: "",
    },
    addOns: {
      CusomizableP: false,
      larger: false,
      onlineS: false,
    },
  },
};

const globalContext = createContext<TypeValue | undefined>(undefined);
const reducer = (state: TypeinitailState, action: Action) => {
  switch (action.type) {
    case "FORWARDSTEP":
      return { ...state, step: state.step++ };
    case "BACKSTEP":
      return { ...state, step: state.step-- };
    case "CONFIRM": {
      return {
        ...state,
        formInfo: {
          userInfo: {
            name: action.payload.userInfo.name,
            email: action.payload.userInfo.email,
            phoneNumber: action.payload.userInfo.phoneNumber,
          },
          plan: {
            typePlan: action.payload.plan.typePlan,
          },
          addOns: {
            CusomizableP: action.payload.addOns.CusomizableP,
            larger: action.payload.addOns.larger,
            onlineS: action.payload.addOns.onlineS,
          },
        },
        step: 0,
      };
    }
  }
};

const GContext: React.FC<ProviderProps> = ({ children }) => {
  const [{ step, formInfo }, dispatch] = useReducer(reducer, initailState);

  console.log(formInfo);
  const values: TypeValue = {
    dispatch,
    step,
  };
  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};
const useGContext: () => TypeValue = () => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export { GContext, useGContext };
