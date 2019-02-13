import { APP_LOAD_DEPENDENCIES, APP_STANDBY, APP_SHOW_OPTIONS } from '../types';

export const loadDependencies = () => ({ type: APP_LOAD_DEPENDENCIES });
export const standbyApp = () => ({ type: APP_STANDBY })
export const showOptions = () => ({ type: APP_SHOW_OPTIONS })