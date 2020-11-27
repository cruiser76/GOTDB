import {combineReducers} from 'redux';
import data from './data/data.js';
import {reducer as form} from 'redux-form';

export default combineReducers({
  data,
  form
});
