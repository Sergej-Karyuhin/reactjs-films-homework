// export const getMoviesCondition = (state) => {
//   console.log('1:', state.movies.condition);
//   return state.movies.condition;
// };
//
// export const getMovies = (state) => {
//   console.log('2:', state.movies.movies);
//   return state.movies.movies;
// };
//
// export const getMoviesIsLoading = (state) => {
//   console.log('3:', state.movies.isLoading);
//   return state.movies.isLoading;
// };
//
// export const getMoviesError = (state) => {
//   console.log('4:', state.movies.error);
//   return state.movies.error;
// };
//
// export const getGenres = (state) => {
//   console.log('5:', state.movies.genres);
//   return state.movies.genres;
// };

export const getMoviesCondition = (state) => state.movies.condition;
export const getMovies = (state) => state.movies.movies;
export const getMoviesIsLoading = (state) => state.movies.isLoading;
export const getMoviesError = (state) => state.movies.error;
export const getGenres = (state) => state.movies.genres;
