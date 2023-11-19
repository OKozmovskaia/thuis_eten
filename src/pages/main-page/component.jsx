import { Navbar } from "../../components/navbar/component";
import { Restaurants } from "../../components/restaurants/component";

export const Page = ({ restaurants }) => {
  const items = Array.from(
    new Set(restaurants.map(({ name, id }) => ({ name, id })))
  );

  return (
    <div>
      <h1>Our restaurants:</h1>
      <Navbar items={items} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
