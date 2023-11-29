import styles from "./styles.module.css";

export const Review = ({ review }) => {
  const { user, rating, text } = review;
  return (
    <div className={styles.reviewContainer}>
      <span className={styles.reviewTitle}>
        <strong>{user}</strong>: {rating}
      </span>
      <span className={styles.reviewText}>{text}</span>
    </div>
  );
};
