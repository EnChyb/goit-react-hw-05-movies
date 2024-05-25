import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieReviews } from "components/API";
import css from "./Reviews.module.css"

const Reviews = () => {
    const { movieId } = useParams();    
    console.log(movieId);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => { 
        movieReviews(movieId)
            .then(response => setReviews(response))
            .catch(error => console.error(error))
    }, [movieId])
    
    return (
        <>{reviews.length > 0 ? (
            <ul className={css.reviews}>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.content}</p>
                        <span>- {review.author}</span>
                    </li>
                
                ))}
        </ul>
        
        ) : (
                <p>There's no reviews for this movie.</p>
                
        )}
        </>
    )
}

export default Reviews;