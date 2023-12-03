import classNames from "classnames";
import styles from "./styles.module.css";
import Logo from "../../images/logo.svg";
import { Button } from "../button/component";
import { useTheme } from "../theme/hook";

export const Header = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <header className={classNames(className, styles.container)}>
      <div className={styles.logo}>
        thuis eten
        <img src={Logo} alt="thuis-eten logo" width="40px" height="40px" />
      </div>

      <div>
        <Button className={styles.button} onClick={() => toggleTheme()}>
          Change Theme
        </Button>
        <Button>Order</Button>
      </div>
    </header>
  );
};
