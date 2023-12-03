import classNames from "classnames";
import styles from "./styles.module.css";

export const Review = ({ review, className }) => {
  const { user, rating, text } = review;
  return (
    <div className={classNames(styles.container, className)}>
      <span className={styles.title}>
        <strong>{user}</strong>: {rating}
      </span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
