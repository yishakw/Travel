import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../starter/pages/Homepage";
import Pricing from "../starter/pages/Pricing";
import Product from "../starter/pages/Product";
import Login from "../starter/pages/Login";
import AppLayout from "../starter/pages/AppLayout";
import CityList from "../starter/components/CityList";
import CountriesList from "../starter/components/CountriesList";
import Form from "../starter/components/Form";
import { useEffect, useState } from "react";
import City from "../starter/components/City";
import Country from "../starter/components/Country";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // eslint-disable-line no-unused-vars

  // setIsLoading is intentionally not used in this component
  useEffect(function () {
    fetch("http://localhost:9000/cities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:idd" element={<City />} />
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries/:idc" element={<Country />} />
          <Route path="form" element={<Form />} />
          <Route index element={<p>LIST</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
