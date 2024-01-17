import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <NavLink className={styles.logo} to="/">
      <img src="/icon.png" alt="WorldWise logo" className={styles.logo} />
      <h2>Travel</h2>
    </NavLink>
  );
}

export default Logo;
