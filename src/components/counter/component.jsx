import styles from "./styles.module.css";
import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement, min, max }) => {
  return (
    <div>
      <Button
        className={styles.button}
        onClick={decrement}
        disabled={value <= min}
      >
        -
      </Button>
      <span className={styles.value}> {value} </span>
      <Button
        className={styles.button}
        onClick={increment}
        disabled={value >= max}
      >
        +
      </Button>
    </div>
  );
};
