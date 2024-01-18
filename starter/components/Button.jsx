import styles from "./Button.module.css";
//eslint-disable-next-line
function Button({ children, onClick, type }) {
  return (
    <button className={`${styles[type]} ${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
