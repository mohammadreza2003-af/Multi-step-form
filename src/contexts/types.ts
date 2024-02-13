import { type ReactNode, Dispatch, SetStateAction } from "react";

export type Action =
  | { type: "FORWARDSTEP" }
  | { type: "BACKSTEP" }
  | { type: "CONFIRM"; payload: FormInfo };

export type ProviderProps = {
  children: ReactNode;
};

export type TypeValue = {
  dispatch: Dispatch<Action>;
  step: number;
};

export type TypeinitailState = {
  step: number;
  formInfo: FormInfo;
};

export type user = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type FormInfo = {
  userInfo: user;
  plan: {
    typePlan: string;
  };
  addOns: TypePickAddStatus;
};

export type TypePlans = {
  icon: string;
  title: string;
  duration: string;
};
export type TypePropsPlans = {
  setPlanType: Dispatch<SetStateAction<string>>;
  planType: string;
};

export type TypePropsUserInfo = {
  setUser: Dispatch<SetStateAction<user>>;
  user: user;
};

export type TypePropsPickAdd = {
  setPickStatus: Dispatch<SetStateAction<TypePickAddStatus>>;
  pickStatus: TypePickAddStatus;
};

export type TypePickAdd = {
  title: string;
  dis: string;
  duration: string;
  type: string;
};

export type TypePickAddStatus = {
  onlineS: boolean;
  larger: boolean;
  CusomizableP: boolean;
};

export type TypePropsFinsh = {
  tempPlan: TypePlans;
  tempListPick: TypePickAdd[];
  amonut: number;
};
