import rootReducer from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
