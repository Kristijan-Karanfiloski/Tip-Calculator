import styles from "./Calculator.module.css";

const Calculator = ({ data, handleReset }) => {
  // let billable = 0;
  //
  // if (Number(data.bill) <= 0) {
  //   console.log("Input field must be a number greater than zero");
  //   // return Number(data.bill) === 0;
  //   billable = 0;
  // } else {
  //   // return data.bill === 0;
  // }

  const tipAmountPerPerson =
    (Number(data.bill) / Number(data.people)) * (Number(data.tip) / 100);
  const totalPerPerson =
    tipAmountPerPerson + Number(data.bill) / Number(data.people);

  return (
    <div className={`${styles.tipWrapper} ${styles.gridFlow}`}>
      <div className={styles.tipAmount}>
        <div>
          <p className={styles.topParagraph}>Tip Amount</p>
          <p className={styles.bottomParagraph}>/ person</p>
        </div>

        <span>
          {`$${
            isFinite(tipAmountPerPerson)
              ? tipAmountPerPerson.toFixed(2)
              : "0.00"
          }`}
        </span>
      </div>
      <div className={styles.total}>
        <div>
          <p className={styles.topParagraph}>Total</p>
          <p className={styles.bottomParagraph}>/ person</p>
        </div>
        <span>{`$${
          isFinite(totalPerPerson) ? totalPerPerson.toFixed(2) : "0.00"
        }`}</span>
      </div>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Calculator;
