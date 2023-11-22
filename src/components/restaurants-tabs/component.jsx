import { Tab } from "../tab/component";

export const RestaurantsTabs = ({ items }) => {
  return (
    <div>
      {items.map(({ name, id }) => (
        <Tab key={id}>{name}</Tab>
      ))}
    </div>
  );
};
