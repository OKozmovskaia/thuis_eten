import { useState } from "react";
import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurant } from "../../components/restaurant/component";

export const Page = ({ restaurants }) => {
  const items = Array.from(
    new Set(restaurants.map(({ name, id }) => ({ name, id })))
  );

  const [selectedTab, onSelectedTab] = useState(null);

  const selectedRestaurant = restaurants.find(
    ({ name }) => name === selectedTab || null
  );

  if (!restaurants.length) {
    return 0;
  }

  return (
    <div>
      <h1>Our restaurants:</h1>
      <RestaurantsTabs items={items} onSelectTab={onSelectedTab} />
      {selectedTab && <Restaurant restaurant={selectedRestaurant} />}
    </div>
  );
};
