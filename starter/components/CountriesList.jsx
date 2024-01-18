import CountryItem from "./CountryItem";
import styles from "./CountriesList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
function CountriesList({ cities, isloading }) {
  if (isloading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on a map." />
    );
  const countries = cities.reduce(
    (acc, cur) =>
      !acc.map((el) => el.city).includes(cur.country)
        ? [...acc, { country: cur.country, emoji: cur.emoji }]
        : acc,
    []
  );
  console.log(countries);
  return (
    <ul className={styles.countriesList}>
      {countries.map((country, i) => (
        <CountryItem countries={country} key={i} />
      ))}
    </ul>
  );
}
CountriesList.propTypes = {
  cities: PropTypes.array,
  isloading: PropTypes.bool,
};
export default CountriesList;
