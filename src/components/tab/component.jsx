import styles from "./styles.module.css";
import classNames from "classnames";

export const Tab = ({ children, onClick, className }) => {
  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};
