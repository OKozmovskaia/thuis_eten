import classNames from "classnames";
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ ids, className }) => {
  return (
    <div className={classNames(className, styles.container)}>
      <h3>Menu:</h3>
      <ul className={styles.list}>
        {ids.map((id) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
