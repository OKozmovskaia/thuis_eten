export const Review = ({ review }) => {
  const { user, rating, text } = review;
  return (
    <p>
      <strong>{user}</strong>: {rating}
      <br></br>
      {text}
    </p>
  );
};
