import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantsTabs = ({ items, onSelectTab }) => {
  return (
    <div className={styles.container}>
      {items.map(({ name, id }) => (
        <Tab className={styles.tab} key={id} onClick={() => onSelectTab(id)}>
          {name}
        </Tab>
      ))}
    </div>
  );
};
