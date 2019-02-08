import { APP_LOAD_DEPENDENCIES, APP_STANDBY } from '../types';

export const storeAppStatus = (state, action) => {
  switch (action.type) {
    case APP_LOAD_DEPENDENCIES:
      return 'loadingDependencies'
    case APP_STANDBY:
      return 'standby'
    default:
      return ''
  }
}