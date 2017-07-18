import { connect } from 'react-redux';
import VenueItemsList from './VenueItemsList';

const mapStateToProps = (state) => {
	return { state }
}

const mapDispatchToProps = (dispatch) => {
	return { dispatch }
}

const VenueItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(VenueItemsList);

export default VenueItemsListContainer;