import InfoBox from "./InfoBox";
import Steps from "./Steps";

const Form = () => {
  return (
    <div className="sm:py-24 max-h-screen">
      <div className="flex sm:flex-row flex-col h-full justify-center items-center bg-white shadow-lg rounded-lg">
        <Steps />
        <InfoBox />
      </div>
    </div>
  );
};

export default Form;
