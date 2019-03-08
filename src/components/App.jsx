import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Input } from 'semantic-ui-react';
import * as clientsActions from '../actions/clients';
import Clients from './Clients';
import Details from './Details';

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
    <div style={{display:'flex', justifyContent:"center", width:'960px', margin:'20px'}}>
        <div>
           <Card>
             <div >
                    <Input style={{width:'100%'}}
                      icon="search"
                      onChange={e => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      placeholder="Enter request..."
                    />
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
  ...bindActionCreators(clientsActions,  dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);




