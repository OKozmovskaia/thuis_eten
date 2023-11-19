import { NavBar } from "../../components/NavBar/component";
import { Restaurants } from "../../components/Restaurants/component";

export const Page = ({ restaurants }) => {
  return (
    <div>
      <NavBar items={restaurants} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
