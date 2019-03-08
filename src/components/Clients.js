
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Image} from 'semantic-ui-react';
import * as clientsActions from '../actions/clients';


const Clients = client => {
  const {addDetails} = client;
  return (
   <List selection divided verticalAlign="middle" onClick={addDetails.bind(this, client)}>
      <List.Item>
        <Image avatar src={client.general.avatar} />
        <List.Content>
        <List.Header>{client.general.firstName}&nbsp;{client.general.lastName}</List.Header>
        <List.Description>{client.job.title}</List.Description>
        </List.Content>
      </List.Item>
  </List>
  );
};

const mapStateToProps = ({ clients }) => ({
  clients: clients.items,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clients);
