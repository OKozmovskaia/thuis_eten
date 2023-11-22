import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu:</h3>
      <ol>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ol>
    </div>
  );
};
