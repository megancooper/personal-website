import { combineReducers } from 'redux';
import download from './download';
import home from './home';

const rootReducer = combineReducers({
  home,
  download
});

export default (state, action) => {
  return rootReducer(state, action);
};
