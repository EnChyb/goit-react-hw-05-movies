// fef97f82d8d49085ce239f9b3e3e2fad

export const placeholderImg = "https://picsum.photos/200/300";
export const posterURL = "https://image.tmdb.org/t/p/w300";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWY5N2Y4MmQ4ZDQ5MDg1Y2UyMzlmOWIzZTNlMmZhZCIsInN1YiI6IjY1ZTg2ZjRiYTFhOWJhMDE4NWJmMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N52ZU8Yy9IzrON1WX2UYvsIciDECC_sAUCcmjx29Yxs'
  }
}

// fetching function
const fetchData = async (url) => {
  // try {
    const response = await fetch(url, options);
    console.log(response)
    // if (response.ok===false) return;
    const responseJSON = await response.json()
    console.log(responseJSON)
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return responseJSON;
  }
  // } catch (error) {
  //       console.error('Error with fetching:' +error)
  // }
//}

// trending-all 
export const trendingAll = async () => {

  const params = 'https://api.themoviedb.org/3/trending/all/day';
  const trending = await fetchData(params);
  return trending.results

}

// search movie using keywords
export const searchMovie = async (query, page) => {

  const params = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
  const movies = await fetchData(params);
  console.log(movies)
  return movies;
}

// get the movie details 
export const movieDetails = async (id) => {
  const params = `https://api.themoviedb.org/3/movie/${id}`;
  const details = await fetchData(params);
  return details;
}

// get the informations about actors in movie
export const movieCredits = async (id) => {
  const params = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const castObject = await fetchData(params);
  console.log(castObject);
  return castObject.cast;
}

// //get the movie reviews

export const movieReviews = async (id) => {

  const params = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const reviews = await fetchData(params);
  console.log(reviews);
  return reviews.results;

}
