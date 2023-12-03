import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
