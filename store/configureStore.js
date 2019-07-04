import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/app.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware = [thunk];
middleware = [...middleware];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
}
