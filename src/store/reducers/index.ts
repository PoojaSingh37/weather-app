import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';
import weather, { WeatherState } from '../slices/weather';
export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
  weather: WeatherState;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  common,
  loader,
  weather,
});

export default rootReducer;
