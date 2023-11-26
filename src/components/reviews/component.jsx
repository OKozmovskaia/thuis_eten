import { Review } from "../review/component";
import { ReviewForm } from "../review-form/component";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <h4>Add your review: </h4>
      <ReviewForm />
    </div>
  );
};
