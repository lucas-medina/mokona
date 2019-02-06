import { LOAD_DEPENDENCIES } from '../types';

export const storeAppStatus = (state, action) => {
  if (action.type === LOAD_DEPENDENCIES) {
    return 'loadingDependencies'
  }
  return '';
}