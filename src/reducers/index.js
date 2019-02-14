import { combineReducers } from 'redux';

import filter from './filter';
import details from './details';
import clients from './clients';


export default combineReducers({
  clients,
  details,
    filter,
});
