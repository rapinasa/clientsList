import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ClientsActions from '../actions/clients';
import App from '../components/App';


const filterClients = (clients,filterBy, searchQuery) =>
  clients.filter(
    o =>
      o.general.lastName.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.general.firstName.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0||
      o.job.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.job.company.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.contact.email.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.contact.phone.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.address.country.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.address.zipCode.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.address.city.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.address.street.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,

  );

const mapStateToProps = ({ clients, filter }) => ({
  clients: clients.items && filterClients(clients.items, filter.filterBy, filter.searchQuery),
  isReady: clients.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ClientsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


