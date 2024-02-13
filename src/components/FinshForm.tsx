import { TypePropsFinsh } from "../contexts/types";

const FinshForm = ({ tempPlan, tempListPick, amonut }: TypePropsFinsh) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-sky-50 p-6 rounded-lg">
        <div className="flex sm:flex-row justify-between items-start">
          <h2 className="text-slate-700 font-semibold text-[18px]">
            {tempPlan?.title}:
          </h2>
          <span className="text-slate-700 font-semibold text-[16px]">
            {tempPlan?.duration}
          </span>
        </div>
        <div className="w-[95%] my-4 bg-slate-300 h-[1px] mx-auto" />
        <div>
          <ul>
            {tempListPick.map((item) => (
              <li
                key={item.title}
                className="flex sm:flex-row justify-between items-start text-slate-500"
              >
                <span className="mb-1">{item.title}</span>
                <span className="text-slate-800">{item.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 flex justify-between items-center">
        <span className="mb-1 text-slate-500">Total:</span>
        <span className="mb-1 text-tr font-semibold text-[16px]">
          +${amonut}
        </span>
      </div>
    </div>
  );
};

export default FinshForm;
