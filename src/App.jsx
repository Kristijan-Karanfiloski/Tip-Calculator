import "./App.css";
import Bill from "./components/bill/Bill.jsx";
import Calculator from "./components/calculator/Calculator.jsx";
import { useState } from "react";

function App() {
  // const [activeButton, setActiveButton] = useState(null);

  const [data, setData] = useState({
    bill: 0,
    tip: 0,
    people: 0,
    isCustom: false,
  });

  const handleReset = () => {
    setData({
      bill: 0,
      tip: 0,
      people: 0,
      isCustom: false,
    });
  };
  console.log(data);

  const handleChange = (key, value) => {
    // setData((prevData) => {
    //   let copyData = { ...prevData };
    //   copyData[key] = value;
    //   return copyData;
    // });

    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <>
      <h1>
        SPLI
        <br />
        TTER
      </h1>
      <main>
        <div className="tipCalculator">
          <Bill data={data} handleChange={handleChange} />
          <Calculator data={data} handleReset={handleReset} />
        </div>
      </main>
    </>
  );
}

export default App;
