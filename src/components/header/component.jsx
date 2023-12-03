import classNames from "classnames";
import styles from "./styles.module.css";
import Logo from "../../images/logo.svg";

export const Header = ({ className }) => {
  return (
    <header className={classNames(className, styles.container)}>
      thuis eten
      <img src={Logo} alt="thuis-eten logo" width="40px" height="40px" />
    </header>
  );
};
