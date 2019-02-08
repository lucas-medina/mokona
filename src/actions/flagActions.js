import { APP_LOAD_DEPENDENCIES, APP_STANDBY } from '../types';

export const loadDependencies = () => ({ type: APP_LOAD_DEPENDENCIES });
export const standbyApp = () => ({ type: APP_STANDBY })