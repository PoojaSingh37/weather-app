import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
  weather: Record<string, any>;
  loading: boolean;
  error: boolean;
}

const initialState: WeatherState = {
  weather: {},
  loading: false,
  error: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherRequest: state => {
      state.loading = true;
    },
    fetchWeatherSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = false;
      console.log('weather', state.weather);
    },
    fetchWeatherFailure: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export { weatherSlice };

export default weatherSlice.reducer;
