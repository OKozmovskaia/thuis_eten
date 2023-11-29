import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <h3>Menu:</h3>
      <ul className={styles.list}>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
