import classNames from "classnames";
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ menu, className }) => {
  return (
    <div className={classNames(className, styles.container)}>
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
