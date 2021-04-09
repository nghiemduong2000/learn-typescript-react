import { all } from 'redux-saga/effects';
import watchWeatherSaga from './watchWeatherSaga';

function* rootSaga() {
  yield all([watchWeatherSaga()]);
}

export default rootSaga;
