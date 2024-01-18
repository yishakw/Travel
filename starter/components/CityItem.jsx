import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import PropTypes from "prop-types";

function CityItem({ city }) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(city.date);
  const formatDate = new Intl.DateTimeFormat("en", options).format(date);
  const { id, position } = city;
  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
CityItem.propTypes = {
  city: PropTypes.object,
};
export default CityItem;
