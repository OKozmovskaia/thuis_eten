import { useState } from "react";
import { useSelector } from "react-redux";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({ id }) => {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );
  const [value, setValue] = useState(0);

  if (!name) {
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
