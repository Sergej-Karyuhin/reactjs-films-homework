import HTTPService from '../httpService';
const httpService = new HTTPService();

export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_IS_LOADING = 'FETCH_DETAILS_IS_LOADING';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';
export const REMOVE_DETAILS_INFO = 'REMOVE_DETAILS_INFO';


export const fetchDetailsSuccess = (content) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: content,
});

export const fetchDetailsIsLoading = () => ({
  type: FETCH_DETAILS_IS_LOADING,
});

export const fetchDetailsError = (error) => ({
  type: FETCH_DETAILS_ERROR,
  error,
});

export const removeDetailsInfo = () => ({
  type: REMOVE_DETAILS_INFO,
});


export function fetchDetails(id) {
  return (dispatch) => {
    dispatch(fetchDetailsIsLoading());
    return httpService.getDetails(id)
      .then((res) => {
        dispatch(fetchDetailsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchDetailsError(error));
      });
  };
}
