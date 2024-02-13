import { useState } from "react";
import { useGContext } from "../contexts/globalContext";
import { TypePickAdd, TypePickAddStatus, user } from "../contexts/types";
import UserInfo from "./UserInfo";
import Title from "./Title";
import Plans from "./Plans";
import PickAdd from "./PickAdd";
import { listPickAdd, plans } from "../constants";
import FinshForm from "./FinshForm";

const initailStatePickStatus = {
  CusomizableP: false,
  larger: false,
  onlineS: false,
};
const initailStateUser = {
  name: "",
  email: "",
  phoneNumber: "",
};

const InfoBox = () => {
  const { step, dispatch } = useGContext();
  const [pickStatus, setPickStatus] = useState<TypePickAddStatus>(
    initailStatePickStatus
  );
  const [user, setUser] = useState<user>(initailStateUser);
  const [planType, setPlanType] = useState<string>("");

  let amonut: number = 0;

  const tempListPick: TypePickAdd[] = [];

  const converStringToNumber = (text: string) => {
    const inputString = text;
    const match = inputString.match(/\d+/);

    if (match) {
      const numberFromString = parseInt(match[0], 10);
      amonut += numberFromString;
    }
  };
  listPickAdd.map((item) => {
    switch (item.type) {
      case "CusomizableP":
        if (pickStatus.CusomizableP) {
          tempListPick.push(item);
          converStringToNumber(item.duration);
        }
        break;
      case "larger":
        if (pickStatus.larger) {
          tempListPick.push(item);
          converStringToNumber(item.duration);
        }

        break;
      case "onlineS":
        if (pickStatus.onlineS) {
          tempListPick.push(item);
          converStringToNumber(item.duration);
        }
        break;
    }
  });

  const tempPlan = plans?.filter(
    (item) => item.title.toLocaleLowerCase() === planType
  )[0];
  converStringToNumber(tempPlan?.duration ? tempPlan.duration : "");

  const handleClickForwarStep = () => {
    if (step >= 0 && step <= 3) {
      if (
        step === 0 &&
        user?.name.length > 0 &&
        user?.email.length > 0 &&
        user?.phoneNumber.length > 0
      ) {
        dispatch({ type: "FORWARDSTEP" });
      } else if (step === 1 && planType.length > 0) {
        dispatch({ type: "FORWARDSTEP" });
      } else if (
        step === 2 &&
        (pickStatus.CusomizableP || pickStatus.larger || pickStatus.onlineS)
      ) {
        dispatch({ type: "FORWARDSTEP" });
      }
    }
  };
  const handleClickBackStep = () => {
    dispatch({ type: "BACKSTEP" });
  };
  const handleConfirm = () => {
    const temp = {
      userInfo: user,
      plan: {
        typePlan: planType,
      },
      addOns: pickStatus,
    };
    dispatch({ type: "CONFIRM", payload: temp });
    setPickStatus(initailStatePickStatus);
    setPlanType("");
    setUser(initailStateUser);
  };
  return (
    <div className="sm:w-[60%] w-full h-full sm:p-8">
      <div className="h-full sm:py-10 rounded-lg flex flex-col justify-between min-h-[70vh]">
        <Title step={step} />
        {step === 0 && <UserInfo setUser={setUser} user={user} />}
        {step === 1 && <Plans setPlanType={setPlanType} planType={planType} />}
        {step === 2 && (
          <PickAdd pickStatus={pickStatus} setPickStatus={setPickStatus} />
        )}
        {step === 3 && (
          <FinshForm
            tempPlan={tempPlan}
            tempListPick={tempListPick}
            amonut={amonut}
          />
        )}
        <div className="flex justify-between items-center">
          <button
            onClick={handleClickBackStep}
            className={`text-slate-500 ${step > 0 ? "visible" : "invisible"}`}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              if (step === 3) {
                handleConfirm();
              } else {
                handleClickForwarStep();
              }
            }}
            className={`px-4 py-2 rounded-lg font-normal text-white ${
              step !== 3 ? "bg-slate-900" : "bg-tr"
            }`}
          >
            {step !== 3 ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
