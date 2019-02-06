import { combineReducers } from 'redux';

const reducerDummy = (action) => {
  return '';
}
export default combineReducers({
  dummy: reducerDummy
})