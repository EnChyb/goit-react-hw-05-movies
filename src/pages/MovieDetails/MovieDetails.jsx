import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetails, posterURL, placeholderImg } from "components/API";
import { BackButton } from "components/BackButton/BackButton";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});
    console.log(movieId);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        movieDetails(movieId)
            .then(response => setDetails(response))
            .catch(error => console.error(error));

    }, [movieId]); 
    
    const { poster_path, title, name, vote_average, overview, genres } = details;

    return (
        <div>
            <BackButton to={ backLinkHref }>Back </BackButton> 
            {details && (
                <>
                <img
                    src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                        alt={`Poster of film: ${title || name}`} />
                    <div>
                        <h2>Title: {title || name}</h2>
                <ul>
                    <li>Score: {vote_average}</li>
                    <li>Overview: {overview}</li>
                    <li>Genres:
                            {details.genres && (
                        <ul>
                            {genres.map( genre  => (
                                <li key={genre.id}>{genre.name}</li>
                            )
                    )}
                        </ul>
                            )}

                    </li>
                    </ul>                        
                    </div>
                </>                
            )}
            <div>
                <h3>Additional information:</h3>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>            
        </div>
    )
}