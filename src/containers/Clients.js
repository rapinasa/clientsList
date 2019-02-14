import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as detailActions from '../actions/details';
import Clients from '../components/Clients';

const mapStateToProps = ({ clients }) => ({
  clients: clients.items,
  isReady: clients.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(detailActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clients);
