// fef97f82d8d49085ce239f9b3e3e2fad



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWY5N2Y4MmQ4ZDQ5MDg1Y2UyMzlmOWIzZTNlMmZhZCIsInN1YiI6IjY1ZTg2ZjRiYTFhOWJhMDE4NWJmMmQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N52ZU8Yy9IzrON1WX2UYvsIciDECC_sAUCcmjx29Yxs'
  }
}

// const fetchData = (url) => {
//     fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response.results))
//     .catch(err => console.error(err));

// }

// trending-all ?api_key=fef97f82d8d49085ce239f9b3e3e2fad'
export const trendingAll = async () => {

  try {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day', options);
    const responseJSON = await response.json()
    console.log(responseJSON.results)  
    return responseJSON.results;
  } catch (error) {
    console.error('Error with API - fetching trending movies:' +error)
    
  }

  // const params = 'https://api.themoviedb.org/3/trending/all/day?api_key=fef97f82d8d49085ce239f9b3e3e2fad';
  // fetchData(params);

}

// search movie using keywords

export const searchMovie = (query, page) => {

  // const params = 'https://api.themoviedb.org/3/search/movie?api_key=fef97f82d8d49085ce239f9b3e3e2fad&include_adult=false&page=1';
  // fetchData(params);  

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=fef97f82d8d49085ce239f9b3e3e2fad&query=${query}&include_adult=false&page=${page}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

// get the movie details by ID `https://api.themoviedb.org/3/movie/${id}`

export const posterURL = "https://image.tmdb.org/t/p/w300";

export const movieDetails = async (id) => {

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fef97f82d8d49085ce239f9b3e3e2fad`);
    const responseJSON = await response.json()
    return responseJSON;
  } catch (error) {
        console.error('Error with API - fetching movie details:' +error)
  }
  //const params = `https://api.themoviedb.org/3/movie/${id}?api_key=fef97f82d8d49085ce239f9b3e3e2fad`;
  //fetchData(params);    

  
  // fetch('https://api.themoviedb.org/3/movie/movie_id?api_key=fef97f82d8d49085ce239f9b3e3e2fad', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
}

// // get the informations about actors in movie

// export const movieCredits = () => {
//   const params = 'https://api.themoviedb.org/3/movie/movie_id/credits?api_key=fef97f82d8d49085ce239f9b3e3e2fad';
//   fetchData(params);

//   // fetch('https://api.themoviedb.org/3/movie/movie_id/credits?api_key=fef97f82d8d49085ce239f9b3e3e2fad', options)
//   //   .then(response => response.json())
//   //   .then(response => console.log(response))
//   //   .catch(err => console.error(err));
// }

// //get the movie reviews

// export const movieReviews = (movieId) => {

//   const params = 'https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=fef97f82d8d49085ce239f9b3e3e2fad&page=1';
//   fetchData(params);

//   // fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=fef97f82d8d49085ce239f9b3e3e2fad&page=1', options)
//   //   .then(response => response.json())
//   //   .then(response => console.log(response))
//   //   .catch(err => console.error(err));

// }

export const GENRES_LIST = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];