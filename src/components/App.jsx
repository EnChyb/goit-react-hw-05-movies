
import { Routes, Route } from "react-router-dom";
import { Movies } from "pages/Movies/Movies";
import { SharedLauout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails" 

export const App = () => {

  return (
    <div>


      <Routes>
        <Route path="/" element={<SharedLauout />} >
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>

    </div>
  );
};
