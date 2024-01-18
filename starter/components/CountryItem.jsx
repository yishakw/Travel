/* eslint-disable no-console */
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.css";

import PropTypes from "prop-types";
function CountryItem({ countries }) {
  const { country, emoji } =
    countries; /* eslint-disable-next-line react/prop-types */
  // country.propTypes = {
  //   country: PropTypes.string,
  // };
  return (
    <li>
      <Link to={`1000?countr=${country}`} className={styles.countryItem}>
        <span>{emoji}</span>
        {/* eslint-disable-next-line react/prop-types*/}
        <span>{country}</span>
        {/* eslint-disable-next-line react/prop-types*/}
      </Link>
    </li>
  );
}
CountryItem.propTypes = {
  countries: PropTypes.object,
  emoji: PropTypes.string,
};

export default CountryItem;
