import styles from "./Calculator.module.css";

const Calculator = ({ data, handleReset }) => {
  // const calculateTip = (tip, bill) => {
  //   if (!tip || isNaN(tip) || tip === 0) return 0;
  //   return (tip / 100) * bill;
  // };
  // const totalAmount = Number(data.bill) + tipAmount;
  const tipAmountPerPerson =
    (Number(data.bill) / Number(data.people)) * (Number(data.tip) / 100);
  const totalPerPerson =
    tipAmountPerPerson + Number(data.bill) / Number(data.people);

  // console.log("Tip Amount :", tipAmount);

  // const tipAmountPerPerson = (Number(data.bill)/data.people)*()

  // const tipPerPerson =
  //   Number(data.people) > 0 && !isNaN(Number(data.people))
  //     ? tipOnTotalAmount / Number(data.people)
  //     : 0;

  return (
    <div className={`${styles.tipWrapper} ${styles.gridFlow}`}>
      <div className={styles.tipAmount}>
        <div>
          <p className={styles.topParagraph}>Tip Amount</p>
          <p className={styles.bottomParagraph}>/ person</p>
        </div>

        <span>
          {/*${" "}*/}
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
