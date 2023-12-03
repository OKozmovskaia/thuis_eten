import classNames from "classnames";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant, className }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={classNames(className, styles.container)}>
      <h2>{name}</h2>
      <Menu menu={menu} className={styles.menu} />
      <Reviews reviews={reviews} className={styles.reviews} />
    </div>
  );
};
