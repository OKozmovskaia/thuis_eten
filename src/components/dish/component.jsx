import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [value, setValue] = useState(0);

  if (!dish) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>{name}</strong> - {price}$<br />
        {ingredients}
      </p>
      <Counter
        value={value}
        increment={() => setValue(value + 1)}
        decrement={() => setValue(value - 1)}
      />
    </div>
  );
};
