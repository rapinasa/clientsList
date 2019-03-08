import React, { Component } from 'react';
import axios from 'axios';
import * as ClientsActions from '../actions/clients';
import Clients from '../containers/Clients';
import { Card, Input, Menu } from 'semantic-ui-react';
import Details from '../containers/Details';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/clients';

class App extends Component {

  componentDidMount() {
    const { setClients } = this.props;
     const { fetchError } = this.props;
    axios.get('/clients.json').then(({ data }) => {
      setClients(data);
    })
    .catch(({ error }) => {
      fetchError(error);
    });
  }

  render() {
    const { clients, isReady, setSearchQuery, searchQuery} = this.props;

    return (
        <div style={{display:'flex', margin:'10px'}}>
      <div>
        <Card>
          <div>
           <Menu primary>
    <Menu.Item>
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Enter request..."
      />
    </Menu.Item>
  </Menu>
          </div>
          {!isReady
            ? 'Загрузка...'
            : clients.map((client) => <Clients key={client.contact.phone} {...client}/>)}
        </Card>
      </div>
      <div>
         <Details />
      </div>
    </div>
    );
  }
}

const mapStateToProps = ({ clients, filter}) => ({
  filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions,  dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);




