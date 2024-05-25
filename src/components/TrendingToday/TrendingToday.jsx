import { trendingAll, posterURL, placeholderImg } from "components/API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from "./TrendingToday.module.css"

export const TrendingToday = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        trendingAll()
            .then(response => setTrendingMovies(response))
            .catch(err => console.error('Error with fetching trending movies:' + err));
    }, []
    );

    return (
        <ul className={css.list}>
            {trendingMovies.map(({id, poster_path, title, name}) => (
                <li className={css.trending}
                    key={id}>
                    <Link className={css.link } to={`/movies/${id}`}>
                        <img
                            src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                            alt={`Poster of film ${title || name}`}
                        width="200"/>
                        <p>{ title || name}</p>
                    </Link>
                </li>

            ))}           
        </ul>

    )
    
}