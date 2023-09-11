import styles from "./Bill.module.css";
import { buttonLabels } from "./components/helper.js";
import TipPercentageButton from "./components/TipPercentageButton.jsx";
import { DolarIcon, PeopleIcon } from "./components/icons.jsx";
import { useState } from "react";

const Bill = ({ data, handleChange }) => {
  const [valid, setIsValid] = useState(false);

  const handleBillInput = (event) => {
    if (handleChange("bill", +event.target.value)) {
      setIsValid(true);
    }
  };

  const handleIsValidInputBlur = (event) => {
    if (event.target.value === "") {
      setIsValid(true);
    }
  };

  const handlePeopleInputChange = (event) => {
    handleChange("people", +event.target.value);
    setIsValid(false);
  };

  return (
    <div className={`${styles.billContainer} ${styles.gridFlow}`}>
      <div className={styles.billInputWrapper}>
        <label htmlFor="bill">Bill</label>
        <input
          value={data.bill === 0 ? "" : data.bill}
          type="number"
          id="bill"
          placeholder="0"
          // value={data.bill}
          // onChange={(e) => handleChange("bill", +e.target.value)}
          onChange={handleBillInput}
        />
        <span>
          <DolarIcon />
        </span>
        {/*{!valid && <p>Cant be empty</p>}*/}
      </div>
      <div className={`${styles.selectTip} ${styles.gridFlow}`}>
        <h2>Select Tip %</h2>
        <div className={styles.buttonGrid}>
          {buttonLabels.map((label, index) => (
            <TipPercentageButton
              label={label}
              key={index}
              type={index === buttonLabels.length - 1 ? "custom" : "default"}
              data={data}
              active={label === data.tip}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div className={styles.peopleInputWrapper}>
        <label htmlFor="people">Number of People</label>
        <input
          value={data.people === 0 ? "" : data.people}
          type="number"
          id="people"
          placeholder="0"
          onChange={handlePeopleInputChange}
          onBlur={handleIsValidInputBlur}
        />
        <span>
          <PeopleIcon />
        </span>
        {valid && <p className={styles.errorInputText}>Can't be zero</p>}
      </div>
    </div>
  );
};

export default Bill;
