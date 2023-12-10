import { useTheme } from "../theme/hook";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, className }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.container, className, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
    >
      {children}
    </button>
  );
};
