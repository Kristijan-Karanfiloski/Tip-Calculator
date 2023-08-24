import styles from "./Calculator.module.css";

const Calculator = ({ data, handleReset }) => {
  const calculateTip = (tip, bill) => {
    if (!tip || isNaN(tip) || tip === 0) return 0;
    return (tip / 100) * bill;
  };
  const tipOnTotalAmount = calculateTip(Number(data.tip), Number(data.bill));

  // const tipOnTotalAmount =
  //   data.tip === "" ? 1 : ((data.tip * 1) / 100) * data.bill;

  // const tipPerPerson =
  //   Number(data.people) !== 0 && !isNaN(Number(data.people))
  //     ? tipOnTotalAmount / Number(data.people)
  //     : 0;

  const tipPerPerson =
    Number(data.people) > 0 && !isNaN(Number(data.people))
      ? tipOnTotalAmount / Number(data.people)
      : 0;

  // const tipPerPerson =
  // data.people && data.people !== 0 ? tipOnTotalAmount / data.people : 0;
  // const tipPerPerson = data.people ? tipOnTotalAmount / data.people : 0;

  return (
    <div className={`${styles.tipWrapper} ${styles.gridFlow}`}>
      <div className={styles.tipAmount}>
        <div>
          <p className={styles.topParagraph}>Tip Amount</p>
          <p className={styles.bottomParagraph}>/ person</p>
        </div>

        <span>$ {tipPerPerson.toFixed(2)}</span>
      </div>
      <div className={styles.total}>
        <div>
          <p className={styles.topParagraph}>Total</p>
          <p className={styles.bottomParagraph}>/ person</p>
        </div>
        <span>$ {tipOnTotalAmount.toFixed(2)}</span>
      </div>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Calculator;
