import { posterURL, placeholderImg } from "components/API";
import { Link, useLocation } from "react-router-dom";
import css from "./SearchResults.module.css"

export const SearchResults = ({ queryResults }) => {
    const location = useLocation();
    return (
        <ul className={css.results}> 
            {queryResults.map(({id, poster_path, title, name}) => (
                <li key={id} className={css.result}>
                    <Link className={css.link} to={`/movies/${id}`} state={{ from: location }}>
                        <img
                            src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                            alt={`Poster of film: ${title || name}`}
                            width="200" />
                    <p>{title || name}</p>
                    </Link>

                </li>
            ))}
        </ul>
    )

}
