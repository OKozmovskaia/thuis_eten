import { useState } from "react";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import styles from "./styles.module.css";
import Logo from "../../images/logo.svg";

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
    <div className={styles.container}>
      <div className={styles.logo}>
        thuis eten
        <img src={Logo} alt="thuis-eten logo" width="40px" height="40px" />
      </div>
      <RestaurantsTabs items={items} onSelectTab={setActiveRestaurantID} />
      {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
    </div>
  );
};
