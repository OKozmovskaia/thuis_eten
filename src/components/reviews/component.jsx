import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";
import styles from "./styles.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <h3 className={styles.title}>Add your review: </h3>
      <ReviewForm />
    </div>
  );
};
