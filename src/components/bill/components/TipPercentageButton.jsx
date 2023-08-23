import styles from "./TipPercentageButton.module.css";

const TipPercentageButton = ({ label, handleChange, active, data }) => {
  // console.log("tipPercentageButton", active);
  // console.log(label);
  // console.log(active);

  const handleButtonClick = (value) => {
    handleChange("tip", value); // Set the tip amount in parent's state
  };
  // console.log(data);
  if (label === "Custom") {
    return (
      <>
        {
          <input
            value={data.isCustom ? data.tip : ""}
            type="number"
            placeholder={"Custom"}
            // onFocus={() => {
            //   handleButtonClick(label);
            // }}
            // onBlur={() => {
            //   handleButtonClick(null);
            // }}
            onFocus={() => {
              if (!data.isCustom) {
                handleChange("isCustom", true);
                return handleChange("tip", "");
              }
            }}
            onChange={(e) => {
              handleChange("tip", e.target.value);
            }}
          />
        }
      </>
    );
  }
  return (
    <button
      className={`${styles.button} ${
        active ? styles.activeButton : styles.button
      }`}
      onClick={() => {
        if (data.isCustom) {
          handleChange("isCustom", false);
        }
        handleButtonClick(label);
      }}
      // onClick={() => handleActive(label)}
      // onFocus={() => {
      //   handleButtonClick(label);
      // }}
    >
      {label}%
    </button>
  );
};

export default TipPercentageButton;
