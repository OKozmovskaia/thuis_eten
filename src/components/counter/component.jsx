export const Counter = ({ value, increment, decrement, min, max }) => {
  return (
    <div>
      <button onClick={decrement} disabled={value <= min}>
        -
      </button>
      <span> {value} </span>
      <button onClick={increment} disabled={value >= max}>
        +
      </button>
    </div>
  );
};
