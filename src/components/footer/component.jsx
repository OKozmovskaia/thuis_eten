import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";
import { ThemeProvider } from "../theme/component";

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(className, styles.container)}>
      <ThemeProvider>
        <Button>Contact</Button>
      </ThemeProvider>
    </footer>
  );
};
