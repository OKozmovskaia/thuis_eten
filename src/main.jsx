import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/entities";
import { Page } from "./pages/main-page/component";

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);
root.render(<Page restaurants={restaurants} />);
