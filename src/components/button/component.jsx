import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, styles.container)}
    >
      {children}
    </button>
  );
};
