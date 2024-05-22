import { trendingAll, posterURL } from "components/API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TrendingToday = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const placeholderImg = "https://picsum.photos/200/300"

    useEffect(() => {

        trendingAll()
            .then(response => setTrendingMovies(response))
            .catch(err => console.error('Error with fetching trending movies:' + err));
    }, []
    );

    return (
        <ul>
            {trendingMovies.map(({id, poster_path, title, name}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`}>
                        <img
                            src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                            alt={`Poster of film ${title || name}`} />
                        <p>{ title || name}</p>
                    </Link>
                </li>

            ))}           
        </ul>

    )
    
}