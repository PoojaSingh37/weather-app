import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from '@Store/actions/weather';



const APPID = '75639a655afcd2079d8e5530470e3f76';

function* fetchDataSaga(action: any) {
  const { payload } = action;
  try {
    const response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${APPID}`,
    );
    console.log('response', response);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

function* weatherSaga() {
  yield takeLatest(fetchWeatherRequest, fetchDataSaga);
}
export default weatherSaga;
