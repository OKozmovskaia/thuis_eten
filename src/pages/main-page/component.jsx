import { useState } from "react";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { Layout } from "../../components/layout/component";
import styles from "./styles.module.css";

export const Page = ({ restaurants }) => {
  const items = Array.from(
    new Set(restaurants.map(({ name, id }) => ({ name, id })))
  );

  const [activeRestaurantID, setActiveRestaurantID] = useState(null);

  const selectedRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantID || null
  );

  if (!restaurants.length) {
    return null;
  }

  return (
    <Layout>
      <RestaurantsTabs items={items} onSelectTab={setActiveRestaurantID} />
      {selectedRestaurant && (
        <Restaurant
          restaurant={selectedRestaurant}
          className={styles.restaurant}
        />
      )}
    </Layout>
  );
};
