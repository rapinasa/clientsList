import React, { Component } from 'react';
import axios from 'axios';
import Clients from '../containers/Clients';
import { Card } from 'semantic-ui-react';
import Details from '../containers/Details';
import Filter from '../containers/Filter';

class App extends Component {
  componentWillMount() {
    const { setClients } = this.props;
    axios.get('/clients.json').then(({ data }) => {
      setClients(data);
    });
  }
  render() {
    const { clients, isReady} = this.props;
    return (
        <div style={{display:'flex', margin:'10px'}}>
      <div>
        <Card>
         <Filter /> 
          {!isReady
            ? 'Загрузка...'
            : clients.map((client) => <Clients {...client}/>)}
        </Card>
      </div>
      <div>
         <Details />
      </div>
    </div>
    );
  }
}
export default App;
