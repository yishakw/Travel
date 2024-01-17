import { Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import Logo from "../components/Logo";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Travel Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
