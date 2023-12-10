import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [value, setValue] = useState(0);

  if (!dish) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h6>
          {name} - {price}$
        </h6>
        <p>{ingredients}</p>
      </div>
      <Counter
        value={value}
        increment={() => setValue(value + 1)}
        decrement={() => setValue(value - 1)}
        min={0}
        max={5}
      />
    </div>
  );
};
