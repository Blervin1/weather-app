import React from 'react';
import { WeatherDetailsProps } from '../types/weatherTypes';
import { formatTime, getWeatherIcon } from '../utils/weatherUtils';

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
	return (
		<div className='weather-app__details'>
			<h1 className='weather-app__title'>{weather.location.name}</h1>
			<span className='weather-app__location'>{weather.location.country}</span>
			<div className='weather-app__time'>
				<p>Time: {formatTime(weather.location.localtime)}</p>
			</div>
			<div className='weather-app__icon'>
				{getWeatherIcon(
					weather.current.condition.text,
					weather.location.localtime
				)}
			</div>
			<h2 className='weather-app__temperature'>
				{Math.round(weather.current.temp_c)}°C
			</h2>
		</div>
	);
};

export default WeatherDetails;
