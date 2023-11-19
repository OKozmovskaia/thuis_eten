import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <Restaurant key={id} name={name} menu={menu} reviews={reviews} />
      ))}
    </div>
  );
};
