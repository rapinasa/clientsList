import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
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
);
export default Filter;