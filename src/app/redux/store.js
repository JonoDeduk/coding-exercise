import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchCustomerReducers from './reducers';

const rootReducer = combineReducers(
  { searchCustomerReducers }
);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
