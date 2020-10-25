// export const getTrailer = (state) => {
//   console.log('1', state.trailer.trailer);
//   return state.trailer.trailer;
// };
//
// export const getTrailerIsLoading = (state) => {
//   console.log('2', state.trailer.isLoading);
//   return state.trailer.isLoading;
// };
//
// export const getTrailerError = (state) => {
//   console.log('3', state.trailer.error);
//   return state.trailer.error;
// };
//
// export const getModalOpened = (state) => {
//   console.log('4', state.trailer.isModalOpened);
//   return state.trailer.isModalOpened;
// };

export const getTrailer = (state) => state.trailer.trailer;
export const getTrailerIsLoading = (state) => state.trailer.isLoading;
export const getTrailerError = (state) => state.trailer.error;
export const getModalOpened = (state) => state.trailer.isModalOpened;
