import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  //eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  //eslint-disable-next-line
  const lat = searchParams.get("lat");
  //eslint-disable-next-line
  const lng = searchParams.get("lng");
  const navigateTo = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigateTo("form")}>
      <h2>position</h2>
      <p>
        lng:{lat} lng:{lng}
      </p>
    </div>
  );
}

export default Map;
