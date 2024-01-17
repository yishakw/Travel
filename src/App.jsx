import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../starter/pages/Homepage";
import Pricing from "../starter/pages/Pricing";
import Product from "../starter/pages/Product";
import Login from "../starter/pages/Login";
import AppLayout from "../starter/pages/AppLayout";
import CityList from "../starter/components/CityList";
import CountryList from "../starter/components/CountryList";
import Form from "../starter/components/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
          <Route path="form" element={<Form />} />
          <Route index element={<p>LIST</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
