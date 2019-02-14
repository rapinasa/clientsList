import React from 'react';
import { List, Image} from 'semantic-ui-react';

const ClientsCard = client => {
  const {addDetails} = client;
  return (
   <List selection divided verticalAlign="middle" onClick={addDetails.bind(this, client)}>
    <List.Item>
      <Image avatar src={client.general.avatar} />
      <List.Content>
      <List.Header>{client.general.firstName}&nbsp;{client.general.lastName}</List.Header>
      <List.Description>{client.job.title} </List.Description>
      </List.Content>
    </List.Item>
  </List>
  );
};
export default ClientsCard;


