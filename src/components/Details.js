
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy';
import { Menu, Image, List } from 'semantic-ui-react';
import * as clientsActions from '../actions/clients';

const CartComponent = client => (

<div style={{display:'flex', flexDirection:'row', background:'#EEEEDF', border:'1px solid #D7D7D8', borderRadius:'5px'}}>
  <Image src={client.general.avatar} style={{width:'100%', height:'100%', margin:'1px', borderRadius:'10px'}}/>
  <List style={{margin:'20px', fontSize:'20px'}}>
      <List.Item style={{textAlign:'center', width:'350px', marginBottom:'15px'}}>
        <List.Header>{client.general.firstName}&nbsp;{client.general.lastName}</List.Header>
      </List.Item>
      <List.Item style={{textAlign:'center', marginBottom:'15px'}}>
        <List.Header>{client.job.title}</List.Header>
      </List.Item>     
      <List.Item>
        <List.Icon name='mail'/>
        <List.Content><a href='mailto:jack@semantic-ui.com'>{client.contact.email}</a></List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='phone'/>
        <List.Content>{client.contact.phone}</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='globe'/>
        <List.Content>
          Country: {client.address.country}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='map marker alternate'/>
        <List.Content>
          ZIP: {client.address.zipCode}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='building'/>
        <List.Content>
          City: {client.address.city}
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='road'/>
        <List.Content>
          Street: {client.address.street}
        </List.Content>
      </List.Item>
  </List>
</div>
);

const Details = ({ items }) => (
    <Menu.Menu position="right" style={{position:'fixed', marginLeft:'20px'}}>
     <Menu.Item>
        {items.map(client => <CartComponent  key={client.contact.phone} {...client} />)}
      </Menu.Item>
    </Menu.Menu>
);

const mapStateToProps = ({ details }) => ({
  items: uniqBy(details.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
