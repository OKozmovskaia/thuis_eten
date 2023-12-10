import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Reviews = ({ ids, className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <h3 className={styles.title}>Reviews:</h3>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Review id={id} className={styles.review} />
          </li>
        ))}
      </ul>
      <h3 className={styles.title}>Add your review: </h3>
      <ReviewForm />
    </div>
  );
};
