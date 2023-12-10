import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <h3 className={styles.title}>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} className={styles.review} />
          </li>
        ))}
      </ul>
      <h3 className={styles.title}>Add your review: </h3>
      <ReviewForm />
    </div>
  );
};
