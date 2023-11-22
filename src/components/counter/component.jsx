import { useState } from "react";

export const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const minusOne = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const plusOne = () => {
    if (quantity === 5) return;
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={minusOne}> - </button>
      <span> {quantity} </span>
      <button onClick={plusOne}> + </button>
    </div>
  );
};
