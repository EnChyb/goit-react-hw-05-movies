
import { Routes, Route } from "react-router-dom";
import { Movies } from "pages/Movies/Movies";
import { SharedLauout } from "./SharedLayout/SharedLayout";

export const App = () => {

  return (
    <div>


      <Routes>
        <Route path="/" element={<SharedLauout />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} /> */}
      </Routes>

    </div>
  );
};
