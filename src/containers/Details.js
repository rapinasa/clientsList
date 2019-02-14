import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as detailActions from '../actions/details';
import Details from '../components/Details';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ details }) => ({
  items: uniqBy(details.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(detailActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
