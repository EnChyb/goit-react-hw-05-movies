import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieDetails, posterURL, placeholderImg } from "components/API";

export const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    console.log(id);

    useEffect(() => {

        movieDetails(id)
            .then(response => setDetails(response))
            .catch(error => console.error(error));

    }, [id]); 
    
    const { poster_path, title, name, vote_average, overview, genres } = details;
    console.log(details);
    console.log(genres)


    //genres funkcja - coś jest nie tak - zakomentowanie genres.map powoduje załadowanie strony, po odkomentowaniu także wszystko działa. 

    return (
        <div>
            <img
                src={poster_path ? `${posterURL}${poster_path}` : placeholderImg}
                alt={`Poster of film: ${title || name}`} />
            <ul>
                <li>Title: {title || name}</li>
                <li>Score: {vote_average}</li>
                <li>Overview: {overview}</li>
                <li>Genres:
                    <ul>
                        {genres.map( genre  => (
                            <li key={genre.id}>{genre.name}</li>

                        )
                )}
                    </ul>
                </li>
            </ul>
        </div>
    )


}