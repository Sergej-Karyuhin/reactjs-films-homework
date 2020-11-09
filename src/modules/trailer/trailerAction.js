import HTTPService from '../httpService';
const httpService = new HTTPService();

export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const FETCH_TRAILER_IS_LOADING = 'FETCH_TRAILER_IS_LOADING';
export const FETCH_TRAILER_ERROR = 'FETCH_TRAILER_ERROR';
export const REMOVE_TRAILER_INFO = 'REMOVE_TRAILER_INFO';


export const fetchTrailerSuccess = (content) => ({
  type: FETCH_TRAILER_SUCCESS,
  payload: content,
});

export const fetchTrailerIsLoading = () => ({
  type: FETCH_TRAILER_IS_LOADING,
});

export const fetchTrailerError = (error) => ({
  type: FETCH_TRAILER_ERROR,
  payload: error,
});

export const removeTrailerInfo = () => ({
  type: REMOVE_TRAILER_INFO,
});


export function fetchTrailer(id) {
  return (dispatch) => {
    dispatch(fetchTrailerIsLoading());

    return httpService.getTrailer(id)
      .then((trailer) => {
        dispatch(fetchTrailerSuccess(trailer));
        return trailer;
      })
      .catch((error) => {
        dispatch(fetchTrailerError(error));
      });
  };
}
