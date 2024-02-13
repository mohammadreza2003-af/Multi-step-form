import "./App.css";
import Form from "./components/Form";
import { GContext } from "./contexts/globalContext";

function App() {
  return (
    <GContext>
      <div className="w-full overflow-hidden bg-blue-100 font-Ub">
        <div className="sm:px-16 px-8 flex justify-center items-center">
          <div className="md:max-w-[950px] w-full">
            <Form />
          </div>
        </div>
      </div>
    </GContext>
  );
}

export default App;
