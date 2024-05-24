
import { Routes, Route } from "react-router-dom";
import { Movies } from "pages/Movies/Movies";
import { SharedLauout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails" 
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFound } from "pages/NotFound/NotFound";

export const App = () => {

  return (
    <div>


      <Routes>
        <Route path="/" element={<SharedLauout />} >
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>  
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>

    </div>
  );
};