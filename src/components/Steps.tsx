import { stepInfo } from "../constants";
import { useGContext } from "../contexts/globalContext";

const Steps = () => {
  const { step } = useGContext();
  return (
    <div className="sm:w-[40%] w-full h-full sm:p-8">
      <div className="min-h-[70vh] sm:px-8 sm:py-10 rounded-lg sm:bg-stepBackDesk bg-stepBackMob bg-cover bg-no-repeat bg-center">
        <ul>
          {stepInfo.map((item, index) => (
            <li
              key={item.id}
              className="flex justify-start gap-x-4  items-center mb-5"
            >
              <div
                className={`w-[32px] rounded-full h-[32px] ${
                  step === index
                    ? "text-slate-900 border-pr bg-pr"
                    : "text-white border-red-50"
                } border-2 flex items-center justify-center`}
              >
                {index + 1}
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="text-slate-400 font-normal">
                  STEP {index + 1}
                </span>
                <h2 className="uppercase text-red-50 font-[500] text-md">
                  {item.text}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Steps;
