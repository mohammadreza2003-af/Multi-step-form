import { listPickAdd } from "../constants";
import { TypePickAdd, TypePropsPickAdd } from "../contexts/types";

const PickAdd = ({ pickStatus, setPickStatus }: TypePropsPickAdd) => {
  const handleChangeStatus = (item: TypePickAdd) => {
    switch (item.type) {
      case "CusomizableP":
        setPickStatus((pre) => {
          const temp = pre;
          return { ...temp, CusomizableP: !pre.CusomizableP };
        });
        break;
      case "larger":
        setPickStatus((pre) => {
          const temp = pre;
          return { ...temp, larger: !pre.larger };
        });
        break;
      case "onlineS":
        setPickStatus((pre) => {
          const temp = pre;
          return { ...temp, onlineS: !pre.onlineS };
        });
    }
  };
  return (
    <div className="my-6">
      <ul className="flex sm:flex-col sm:gap-y-4">
        {listPickAdd.map((item) => {
          const temp: boolean = pickStatus[item.type];
          return (
            <li
              key={item.title}
              className={`cursor-pointer bg-white border-slate-400 border sm:px-3 sm:py-4 rounded-lg flex items-center justify-between transitionA ${
                temp && "bg-sky-100"
              }`}
            >
              <div className="flex justify-start items-center sm:gap-x-4">
                <input
                  onChange={() => handleChangeStatus(item)}
                  type="checkbox"
                  checked={temp}
                  className="w-[18px]  h-[18px]"
                />{" "}
                <div className="flex sm:flex-col sm:gap-y-[2px]">
                  <h2 className="text-slate-700 font-semibold text-lg">
                    {item.title}
                  </h2>
                  <span className="font-normal text-slate-500">{item.dis}</span>
                </div>
              </div>
              <span className="font-normal text-sky-400">{item.duration}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PickAdd;
