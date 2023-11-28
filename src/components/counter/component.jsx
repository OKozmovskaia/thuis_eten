import styles from "./styles.module.css";

export const Counter = ({ value, increment, decrement, min, max }) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </button>
      <span className={styles.value}> {value} </span>
      <button
        className={styles.button}
        onClick={increment}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};
