import { useState } from "react";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurant } from "../../components/restaurant/component";

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
    <div>
      <h1>Our restaurants:</h1>
      <RestaurantsTabs items={items} onSelectTab={setActiveRestaurantID} />
      {activeRestaurantID && <Restaurant restaurant={selectedRestaurant} />}
    </div>
  );
};
