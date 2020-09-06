import { combineReducers } from 'redux';

import movies from './movies';

const appReducer = combineReducers({
  movies,
});

export default (state, action) => appReducer(state, action);
