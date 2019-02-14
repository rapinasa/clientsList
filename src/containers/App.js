import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ClientsActions from '../actions/clients';
import App from '../components/App';
import orderBy from 'lodash/orderBy';


const filterClients = (clients, searchQuery) =>
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

const searchClients = (clients, filterBy, searchQuery) => {
  return filterClients(clients, searchQuery);
};

const mapStateToProps = ({ clients, filter }) => ({
  clients: clients.items && searchClients(clients.items, filter.filterBy, filter.searchQuery),
  isReady: clients.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ClientsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
