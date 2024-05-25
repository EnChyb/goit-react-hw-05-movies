import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetails, posterURL, placeholderImg } from "components/API";
import { BackButton } from "components/BackButton/BackButton";
import { NotFound } from "pages/NotFound/NotFound";
//import { Loader } from "components/Loader/Loader";
import css from "./MovieDetails.module.css"

const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});
    console.log(movieId);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const [error, setError] = useState(false)
    //const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //setIsLoading(true);
        movieDetails(movieId)
            .then(response => setDetails(response))
            .catch(error => {
                setError(true);
                console.error(error);
            });
        //setTimeout(() => { setIsLoading(false) }, 1000);

    }, [movieId]); 
    
    const { poster_path, title, name, vote_average, overview, genres } = details;

    return (
        <div>
            <BackButton  to={backLinkHref}><p className={css.back}>Back</p> </BackButton> 
            {error&& <NotFound/>}
            {details && !error && (
                <div className={css.container}>
                    <div className={css.info}>
                        <img className={css.img} width="200"
                        src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                        alt={`Poster of film: ${title || name}`} />
                        <div className={css.text}>
                            <h2 className={css.title}>Title: {title || name}</h2>
                            <ul className={css.details}>
                                <li>Score: {vote_average}</li>
                                <li>Overview: {overview}</li>
                                <li>Genres:
                                        {details.genres && (
                                    <ul className={css.genres}>
                                        {genres.map( genre  => (
                                            <li className={css.genre } key={genre.id}>{genre.name}</li>
                                        )
                                )}
                                    </ul>
                                        )}

                                </li>
                            </ul>                        
                        </div>
                    </div>
                        <div>
                            <h3 className={css.more}>Additional information:</h3>
                            <ul className={css.links}>
                                <li>
                                    <Link to="cast">Cast</Link>
                                </li>
                                <li>
                                    <Link to="reviews">Reviews</Link>
                                </li>
                            </ul>
                        </div>

                    
                </div>                           
            )}

            <Outlet/>            
        </div>
    )
}

export default MovieDetails;