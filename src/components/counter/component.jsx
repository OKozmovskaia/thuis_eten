export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement} disabled={value <= 0}>
        -
      </button>
      <span> {value} </span>
      <button onClick={increment} disabled={value >= 5}>
        +
      </button>
    </div>
  );
};
