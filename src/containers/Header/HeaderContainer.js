import { connect } from 'react-redux';

import Header from './Header';
import { setMoviesCondition, fetchMovies } from '../../modules/movies/moviesAction';
import { getMoviesCondition } from '../../modules/movies/moviesSelector';

const mapStateToProps = (state) => ({condition: getMoviesCondition(state)});
const mapDispatchToProps = {setMoviesCondition, fetchMovies};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
