import { lazy} from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLauout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(()=> import("./Reviews/Reviews"))

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
