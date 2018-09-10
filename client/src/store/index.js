import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducerdata} from '../reducers'

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducerdata,
  applyMiddleware(thunk)
);

export default store
