import styles from "./styles.module.css";
import { Button } from "../button/component";
import { useTheme } from "../theme/hook";

export const Counter = ({ value, increment, decrement, min, max }) => {
  const { darkTheme } = useTheme();

  return (
    <div>
      <Button
        className={styles.button}
        onClick={decrement}
        disabled={value <= min}
        darkTheme={darkTheme}
      >
        -
      </Button>
      <span className={styles.value}> {value} </span>
      <Button
        className={styles.button}
        onClick={increment}
        disabled={value >= max}
        darkTheme={darkTheme}
      >
        +
      </Button>
    </div>
  );
};
