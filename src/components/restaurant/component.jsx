import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
