// fef97f82d8d49085ce239f9b3e3e2fad

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
}

const fetchData = (url) => {
    fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.error(err));

}

// trending-all
export const trendingAll = () => {

  const params = 'https://api.themoviedb.org/3/trending/all/day?api_key=fef97f82d8d49085ce239f9b3e3e2fad';
  fetchData(params);

  // fetch('https://api.themoviedb.org/3/trending/all/day?api_key=fef97f82d8d49085ce239f9b3e3e2fad', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
}

// search movie using keywords

export const searchMovie = (query) => {

  const params = 'https://api.themoviedb.org/3/search/movie?api_key=fef97f82d8d49085ce239f9b3e3e2fad&include_adult=false&page=1';
  fetchData(params);  

  // fetch('https://api.themoviedb.org/3/search/movie?api_key=fef97f82d8d49085ce239f9b3e3e2fad&include_adult=false&page=1', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
}

// get the movie details by ID

export const movieDetails = () => {
  const params = 'https://api.themoviedb.org/3/movie/movie_id?api_key=fef97f82d8d49085ce239f9b3e3e2fad';
  fetchData(params);    

  // fetch('https://api.themoviedb.org/3/movie/movie_id?api_key=fef97f82d8d49085ce239f9b3e3e2fad', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
}

// get the informations about actors in movie

export const movieCredits = () => {
  const params = 'https://api.themoviedb.org/3/movie/movie_id/credits?api_key=fef97f82d8d49085ce239f9b3e3e2fad';
  fetchData(params);   

  // fetch('https://api.themoviedb.org/3/movie/movie_id/credits?api_key=fef97f82d8d49085ce239f9b3e3e2fad', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
}

//get the movie reviews

export const movieReviews = (movieId) => {

  const params = 'https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=fef97f82d8d49085ce239f9b3e3e2fad&page=1';
  fetchData(params);   

  // fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=fef97f82d8d49085ce239f9b3e3e2fad&page=1', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

}