import { posterURL, placeholderImg } from "components/API";
import { Link, useLocation } from "react-router-dom";

export const SearchResults = ({ queryResults }) => {
    const location = useLocation();
    return (
        <ul> 
            {queryResults.map(({id, poster_path, title, name}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        <img
                            src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                            alt={`Poster of film: ${title || name}`} />
                    <p>{title || name}</p>
                    </Link>

                </li>
            ))}
        </ul>
    )

}
