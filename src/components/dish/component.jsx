import { Counter } from "../counter/component";

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  return (
    <div>
      <p>
        <strong>{name}</strong> - {price}$<br />
        {ingredients}
      </p>
      <Counter />
    </div>
  );
};
