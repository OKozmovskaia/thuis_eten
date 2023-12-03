import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";

export const Footer = ({ className }) => {
  return (
    <footer className={classNames(className, styles.container)}>
      <Button>Contact</Button>
    </footer>
  );
};
