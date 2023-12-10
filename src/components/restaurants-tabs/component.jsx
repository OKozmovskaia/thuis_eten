import { Tab } from "../tab/component";
import styles from "./styles.module.css";

export const RestaurantsTabs = ({ ids, onSelectTab }) => {
  return (
    <div className={styles.container}>
      {ids.map((id) => (
        <Tab
          id={id}
          className={styles.tab}
          key={id}
          onClick={() => onSelectTab(id)}
        />
      ))}
    </div>
  );
};
