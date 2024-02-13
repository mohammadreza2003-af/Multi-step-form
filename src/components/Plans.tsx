import { plans } from "../constants";
import { TypePropsPlans } from "../contexts/types";

const Plans = ({ setPlanType, planType }: TypePropsPlans) => {
  const handleChangePlan = (type: string) => {
    const temp = type.toLocaleLowerCase();
    setPlanType(temp);
  };
  return (
    <div>
      <ul className="flex sm:flex-row justify-between items-center sm:gap-x-6 my-6">
        {plans.map((item) => (
          <li
            key={item.title}
            onClick={() => handleChangePlan(item.title)}
            className={`flex sm:flex-col sm:px-4 sm:py-6 sm:gap-y-12 items-start justify-between border-2 border-slate-400 w-full rounded-lg cursor-pointer transitionA hover:bg-slate-100 ${
              item.title.toLocaleLowerCase() === planType
                ? "bg-slate-200"
                : "bg-white"
            }`}
          >
            <img src={item.icon} alt={item.title} />
            <div className="flex sm:flex-col sm:gap-y-[2px]">
              <h2 className="text-slate-700 font-semibold text-lg">
                {item.title}
              </h2>
              <span className="font-normal text-slate-500">
                {item.duration}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;
