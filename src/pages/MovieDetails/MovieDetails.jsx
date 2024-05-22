import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetails } from "components/API";

export const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(id);

    useEffect(() => {
        if (!id) return;
        movieDetails(id)
            .then(response => setDetails(response))
            .catch(error => console.error(error));

    }, [id]); 
    
    const { poster_path, title, name, vote_average, overview, genres } = details;
    console.log(details)


    //genres funkcja jak wyciągnąć + jak wyświetlic kartę MovieDetails

    return (
        <div>
            <img src={poster_path} alt={`Poster of film: ${title || name}`} />
            <ul>
                <li>Title: {title || name}</li>
                <li>Score: {vote_average}</li>
                <li>Overview: {overview}</li>
                <li>Genres:
                    <ul>
                        {genres.map(( genre ) => (
                            <li key={genre.id}>{genre.name}</li>

                        )
                )}

                    </ul>

                </li>

            </ul>

        </div>
    )


}