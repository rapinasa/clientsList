import React from 'react';
import { Menu, Card, Image } from 'semantic-ui-react';

const CartComponent = client => (

   <Card>
      <Image src={client.general.avatar} style={{textAlign:'center', width:'100%'}}/>
      <Card.Content>  
         <Card.Header style={{textAlign:'center'}}>{client.general.firstName}&nbsp;{client.general.lastName}</Card.Header> 
        <Card.Meta style={{textAlign:'center'}}>
          <span>{client.job.title}</span>
        </Card.Meta>
         <Card.Description ><i class="envelope outline icon"></i>{'Email:'+' '}{client.contact.email}</Card.Description>
         <Card.Description><i class="phone icon"></i>{'Phone:'+' '}{client.contact.phone}</Card.Description>
         <Card.Description><i class="globe icon"></i>{'Country:'+' '}{client.address.country}</Card.Description>
         <Card.Description><i class="map marker alternate icon"></i>{'ZIP:'+' '}{client.address.zipCode}</Card.Description>
         <Card.Description><i class="building icon"></i>{'City:'+' '}{client.address.city}</Card.Description>
         <Card.Description><i class="road icon"></i>{'Street:'+" "}{client.address.street}</Card.Description>
      </Card.Content>
    </Card>
);

const MenuComponent = ({ items }) => (
 
    <Menu.Menu position="right" style={{position:'fixed', marginLeft:'20px', textAlign:'left'}}>
     <Menu.Item>
        {items.map(client => <CartComponent {...client} />)}
      </Menu.Item>
    </Menu.Menu>
);

export default MenuComponent;



