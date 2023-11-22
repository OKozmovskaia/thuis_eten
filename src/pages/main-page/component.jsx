import { RestaurantsTabs } from "../../components/restaurants-tabs/component";
import { Restaurants } from "../../components/restaurants/component";

export const Page = ({ restaurants }) => {
  const items = Array.from(
    new Set(restaurants.map(({ name, id }) => ({ name, id })))
  );

  return (
    <div>
      <h1>Our restaurants:</h1>
      <RestaurantsTabs items={items} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
