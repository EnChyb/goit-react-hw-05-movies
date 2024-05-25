import { useParams } from "react-router-dom"
import { movieCredits, placeholderImg, posterURL } from "components/API"
import { useEffect, useState } from "react";
import css from "./Cast.module.css"

const Cast = () => {
    const { movieId } = useParams();
console.log(movieId)
    const [cast, setCast] = useState([]);
    console.log(cast)

    useEffect(() => {
        movieCredits(movieId)
            .then(response => setCast(response))
            .catch(error => console.error(error));    
    }, [movieId])
    


    return (
        <>
            {cast.length>0 ? (
            <ul className={css.cast}>
                {cast.map(item => (
                    <li key={item.id}>
                        <img className={css.photo} src={item.profile_path ? `${posterURL}${item.profile_path}` : placeholderImg} alt='' width="150" />
                        <h3 className={css.title}>{item.name}</h3>
                        <p className={css.character}>{item.character}</p>
                    </li>

                ))}

            </ul>            
            ) : (
            <p>Sorry, there's no information about the cast!</p>                      
            )}
        </>

    )
}

export default Cast; 