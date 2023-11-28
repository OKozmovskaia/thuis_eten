import styles from "./styles.module.css";

export const Tab = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
