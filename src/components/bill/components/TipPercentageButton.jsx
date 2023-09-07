import styles from "./TipPercentageButton.module.css";

const TipPercentageButton = ({ label, handleChange, active, data }) => {
  const handleButtonClick = (value) => {
    handleChange("tip", value); // Set the tip amount in parent's state
  };

  if (label === "Custom") {
    return (
      <>
        {
          <input
            value={data.isCustom ? data.tip : ""}
            type="number"
            placeholder="Custom"
            onFocus={() => {
              handleChange("isCustom", true);
              handleChange("tip", "");
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
    >
      {label}%
    </button>
  );
};

export default TipPercentageButton;
