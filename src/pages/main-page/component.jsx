import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { Layout } from "../../components/layout/component";
import styles from "./styles.module.css";

export const Page = () => {
  const [activeRestaurantID, setActiveRestaurantID] = useState(null);
  const restaurantsIds = useSelector(selectRestaurantIds);

  const selectedRestaurant = restaurantsIds.find(
    (id) => id === activeRestaurantID || null
  );

  if (!restaurantsIds.length) {
    return null;
  }

  return (
    <Layout>
      <RestaurantsTabs
        ids={restaurantsIds}
        onSelectTab={setActiveRestaurantID}
      />
      {selectedRestaurant && (
        <Restaurant id={selectedRestaurant} className={styles.restaurant} />
      )}
    </Layout>
  );
};
