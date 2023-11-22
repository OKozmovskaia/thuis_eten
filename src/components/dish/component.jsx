export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;
  return (
    <p>
      <strong>{name}</strong> - {price}$<br />
      {ingredients}
    </p>
  );
};
