import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './movies/moviesReducer';
import trailerReducer from './trailer/trailerReducer';
import detailsReducer from './details/detailsReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movies: moviesReducer,
  trailer: trailerReducer,
  details: detailsReducer,
});

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
