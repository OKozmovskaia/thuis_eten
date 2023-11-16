import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/entities";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(
  <div>
    <h1>Restaurants:</h1>
    <ol>
      {/* First restaurant */}
      <li id={restaurants[0].id}>
        <h2>{restaurants[0].name}</h2>
        <h3>Menu</h3>
        <ul>
          <li id={restaurants[0].menu[0].id}>
            {restaurants[0].menu[0].name} - {restaurants[0].menu[0].price}$
          </li>
          <li id={restaurants[0].menu[1].id}>
            {restaurants[0].menu[1].name} - {restaurants[0].menu[1].price}$
          </li>
          <li id={restaurants[0].menu[2].id}>
            {restaurants[0].menu[2].name} - {restaurants[0].menu[2].price}$
          </li>
        </ul>

        <h3>Review</h3>
        <ul>
          <li id={restaurants[0].reviews[0].id}>
            {restaurants[0].reviews[0].user}
            {": "}
            {restaurants[0].reviews[0].rating}
            <p>{restaurants[0].reviews[0].text}</p>
          </li>
          <li id={restaurants[0].reviews[1].id}>
            {restaurants[0].reviews[1].user}
            {": "}
            {restaurants[0].reviews[1].rating}
            <p>{restaurants[0].reviews[1].text}</p>
          </li>
        </ul>
        <hr></hr>
      </li>

      {/* Second restaurant */}
      <li id={restaurants[1].id}>
        <h2>{restaurants[1].name}</h2>
        <h3>Menu</h3>
        <ul>
          <li id={restaurants[1].menu[0].id}>
            {restaurants[1].menu[0].name} - {restaurants[1].menu[0].price}$
          </li>
          <li id={restaurants[1].menu[1].id}>
            {restaurants[1].menu[1].name} - {restaurants[1].menu[1].price}$
          </li>
        </ul>

        <h3>Review</h3>
        <ul>
          <li id={restaurants[1].reviews[0].id}>
            {restaurants[1].reviews[0].user}
            {": "}
            {restaurants[1].reviews[0].rating}
            <p>{restaurants[1].reviews[0].text}</p>
          </li>
          <li id={restaurants[1].reviews[1].id}>
            {restaurants[1].reviews[1].user}
            {": "}
            {restaurants[1].reviews[1].rating}
            <p>{restaurants[1].reviews[1].text}</p>
          </li>
          <li id={restaurants[1].reviews[2].id}>
            {restaurants[1].reviews[2].user}
            {": "}
            {restaurants[1].reviews[2].rating}
            <p>{restaurants[1].reviews[2].text}</p>
          </li>
        </ul>
        <hr></hr>
      </li>

      {/* Third restaurant */}
      <li id={restaurants[2].id}>
        <h2>{restaurants[2].name}</h2>
        <h3>Menu</h3>
        <ul>
          <li id={restaurants[2].menu[0].id}>
            {restaurants[2].menu[0].name} - {restaurants[2].menu[0].price}$
          </li>
          <li id={restaurants[2].menu[1].id}>
            {restaurants[2].menu[1].name} - {restaurants[2].menu[1].price}$
          </li>
          <li id={restaurants[2].menu[2].id}>
            {restaurants[2].menu[2].name} - {restaurants[2].menu[2].price}$
          </li>
        </ul>

        <h3>Review</h3>
        <ul>
          <li id={restaurants[2].reviews[0].id}>
            {restaurants[2].reviews[0].user}
            {": "}
            {restaurants[2].reviews[0].rating}
            <p>{restaurants[2].reviews[0].text}</p>
          </li>
        </ul>
        <hr></hr>
      </li>

      {/* Forth restaurant */}
      <li id={restaurants[3].id}>
        <h2>{restaurants[3].name}</h2>
        <h3>Menu</h3>
        <ul>
          <li id={restaurants[3].menu[0].id}>
            {restaurants[3].menu[0].name} - {restaurants[3].menu[0].price}$
          </li>
          <li id={restaurants[3].menu[1].id}>
            {restaurants[3].menu[1].name} - {restaurants[3].menu[1].price}$
          </li>
        </ul>

        <h3>Review</h3>
        <ul>
          <li id={restaurants[3].reviews[0].id}>
            {restaurants[3].reviews[0].user}
            {": "}
            {restaurants[3].reviews[0].rating}
            <p>{restaurants[3].reviews[0].text}</p>
          </li>
          <li id={restaurants[3].reviews[1].id}>
            {restaurants[3].reviews[1].user}
            {": "}
            {restaurants[3].reviews[1].rating}
            <p>{restaurants[3].reviews[1].text}</p>
          </li>
        </ul>
        <hr></hr>
      </li>
    </ol>
  </div>
);
