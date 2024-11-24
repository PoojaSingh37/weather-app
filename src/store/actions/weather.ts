import { weatherSlice } from "@Store/slices/weather";

export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } =
  weatherSlice.actions;
