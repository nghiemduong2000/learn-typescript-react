import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
} from 'actions/types';
import { getWeatherApi } from 'apis/getWeatherApi';

interface Action {
  type: string;
  data: {
    city: string;
    country: string;
  };
}

function* getWeatherSaga(action: Action) {
  try {
    yield put({
      type: GET_WEATHER_START,
    });
    const { city, country } = action.data;
    const res = yield call(getWeatherApi, city, country);
    yield put({
      type: GET_WEATHER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_WEATHER_FAIL,
    });
  }
}

export default function* watchWeatherSaga() {
  yield takeEvery(GET_WEATHER, getWeatherSaga);
}
