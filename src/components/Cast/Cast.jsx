import { useParams } from "react-router-dom"
import { movieCredits, placeholderImg, posterURL } from "components/API"
import { useEffect, useState } from "react"

export const Cast = () => {
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
            <ul>
                {cast.map(item => (
                    <li key={item.id}>
                        <img src={item.profile_path ? `${posterURL}${item.profile_path}` : placeholderImg} alt='' />
                        <h3>{item.name}</h3>
                        <p>{item.character}</p>
                    </li>

                ))}

            </ul>            
            ) : (
            <p>Sorry, there's no information about the cast!</p>                      
            )}
        </>

    )

    


}