import React, { useEffect, useState } from 'react';
import { useTypedSelector, useTypedDispatch } from '@Store/hooks';
import { fetchWeatherRequest } from '@Store/actions/weather';


const Weather = () => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useTypedDispatch();

  const weather = useTypedSelector(state => state.weather.weather);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="  naxatw-items-center naxtw-gap-8 naxatw-bg-primary-100 naxatw-bg-opacity-100  naxatw-w-1/4 naxatw-mx-auto naxatw-my-auto naxatw-p-3 naxatw-mt-14 naxatw-rounded-lg">
      <div className=" naxatw-text-center naxatw-font-normal  ">
        <h2 className="naxatw-font-bold naxatw-text-yellow-500">Weather</h2>
        <div>
          <input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            placeholder="Enter city name"
            className="naxatw-m-3  naxatw-gap-5 naxatw-text-center"
          />
          <button
            type='button'
            onClick={() => {
              dispatch(fetchWeatherRequest(inputValue ));
            }}
            className="naxatw-rounded-lg naxatw-border-2 naxatw-border-slate-600 naxatw-bg-blue-600 naxatw-p-1 naxatw-text-white"
          >
            Get Weather
          </button>
        </div>
        <p>City Name: {weather?.name}</p>

        <div>
          <h2></h2>
          <p>Temperature: {weather?.main?.temp}°C</p>

          <p>Humidity:{weather?.main?.humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
