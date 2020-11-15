import { connect } from 'react-redux';

import MovieDetails from './MovieDetails';
import {
  getDetails,
  getDetailsIsLoading,
  getDetailsError,
} from '../../modules/details/detailsSelector';
import { fetchDetails } from '../../modules/details/detailsAction';
import { fetchTrailer } from '../../modules/trailer/trailerAction';

const mapDispatchToProps = { fetchDetails, fetchTrailer };
export const mapStateToProps = (state) => ({
  details: getDetails(state),
  error: getDetailsError(state),
  isLoading: getDetailsIsLoading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
