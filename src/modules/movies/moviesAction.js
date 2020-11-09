import HTTPService from '../httpService';
const httpService = new HTTPService();


export const SET_MOVIES_CONDITION = 'SET_MOVIES_CONDITION';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_IS_LOADING = 'FETCH_MOVIES_IS_LOADING';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';


export const setMoviesCondition = (condition) => ({
  type: SET_MOVIES_CONDITION,
  payload: condition,
});

export const fetchMoviesSuccess = (content) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: content,
});

export const fetchMoviesIsLoading = () => ({
  type: FETCH_MOVIES_IS_LOADING,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  payload: error,
});

export const fetchGenresSuccess = (content) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: content,
});


export function fetchMovies(condition, inputValue) {
  return (dispatch) => {
    dispatch(fetchMoviesIsLoading());

    let fetchInputValue;
    switch (condition) {
      case 'Search':
        fetchInputValue = httpService.getSearch;
        break;

      case 'Trending':
        fetchInputValue = httpService.getTrending;
        break;

      case 'Top Rated':
        fetchInputValue = httpService.getTopRated;
        break;

      case 'Coming soon':
        fetchInputValue = httpService.getComingSoon;
        break;

      default:
        fetchInputValue = httpService.getByGenre.bind(null, condition);
        break;
    }

    return httpService.getGenres()
      .then((genres) => {
        dispatch(fetchGenresSuccess(genres));
        return genres;
      })
      .then((genres) =>
        fetchInputValue(genres, inputValue)
      .then((movies) => {
        dispatch(fetchMoviesSuccess(movies));
        return movies;
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      }));
  };
}
