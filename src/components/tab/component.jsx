import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../redux/entities/restaurant/selectors";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Tab = ({ id, onClick, className }) => {
  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, id)
  );

  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {restaurantName}
    </button>
  );
};
