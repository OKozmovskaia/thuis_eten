import { Tab } from "../tab/component";

export const RestaurantsTabs = ({ items, onSelectTab }) => {
  return (
    <div>
      {items.map(({ name, id }) => (
        <Tab key={id} onClick={() => onSelectTab(name)}>
          {name}
        </Tab>
      ))}
    </div>
  );
};
