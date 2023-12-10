import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./styles.module.css";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserNameById } from "../../redux/entities/user/selectors";

export const Review = ({ id, className }) => {
  const { userId, rating, text } = useSelector((state) =>
    selectReviewById(state, id)
  );

  const userName = useSelector((state) => selectUserNameById(state, userId));
  return (
    <div className={classNames(styles.container, className)}>
      <span className={styles.title}>
        <strong>{userName}</strong>: {rating}
      </span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
