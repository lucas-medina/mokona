import { combineReducers } from 'redux';
import { storeAppStatus } from './appStatus';

export default combineReducers({
  appStatus: storeAppStatus
})