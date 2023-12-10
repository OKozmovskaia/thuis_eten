import classNames from "classnames";
import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";
import {
  selectRestaurantMenuById,
  selectRestaurantNameById,
  selectRestaurantReviewsById,
} from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ id, className }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, id));
  const menuIds = useSelector((state) => selectRestaurantMenuById(state, id));
  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsById(state, id)
  );

  return (
    <div className={classNames(className, styles.container)}>
      <h2>{name}</h2>
      <Menu ids={menuIds} className={styles.menu} />
      <Reviews ids={reviewsIds} className={styles.reviews} />
    </div>
  );
};
