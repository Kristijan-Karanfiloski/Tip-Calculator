import styles from "./Bill.module.css";
import { buttonLabels } from "./components/helper.js";
import TipPercentageButton from "./components/TipPercentageButton.jsx";
import { DolarIcon, PeopleIcon } from "./components/icons.jsx";

const Bill = ({ data, handleChange }) => {
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
          onChange={(e) => handleChange("bill", e.target.value)}
        />
        <span>
          <DolarIcon />
        </span>
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
          onChange={(e) => handleChange("people", e.target.value)}
        />
        <span>
          <PeopleIcon />
        </span>
      </div>
    </div>
  );
};

export default Bill;
