import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/entities";
import { Page } from "./pages/main-page/component";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page restaurants={restaurants} />);
