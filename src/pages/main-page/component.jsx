import { Navbar } from "../../components/navbar/component";
// import { Restaurants } from "../../components/Restaurants/component";

export const Page = ({ restaurants }) => {
  const items = Array.from(
    new Set(restaurants.map(({ name, id }) => ({ name, id })))
  );

  return (
    <div>
      <Navbar items={items} />
      {/* <Restaurants restaurants={restaurants} /> */}
    </div>
  );
};
