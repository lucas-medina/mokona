import { combineReducers } from 'redux';
import { APP_LOAD_DEPENDENCIES, APP_STANDBY, APP_SHOW_OPTIONS } from '../types';

const initialAppState = 'idle';

const storeAppStatus = (state = initialAppState, action) => {
  switch (action.type) {
    case APP_LOAD_DEPENDENCIES:
      return 'loadingDependencies'
    case APP_STANDBY:
      return 'standby'
    case APP_SHOW_OPTIONS:
      return 'showing-options'
    default:
      return state
  }
}

export default combineReducers({
  appStatus: storeAppStatus
})