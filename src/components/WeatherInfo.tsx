import React from 'react';
import { WiCloudyWindy, WiHumidity } from 'react-icons/wi';
import { WeatherData } from '../types/weatherTypes';

interface WeatherInfoProps {
	weather: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
	return (
		<div className='weather-app__info'>
			<div className='weather-app__info-item'>
				<WiHumidity className='weather-app__info-icon' />
				<div className='weather-app__info-details'>
					<h1 className='weather-app__info-value'>
						{weather.current.humidity}%
					</h1>
					<p className='weather-app__info-label'>Humidity</p>
				</div>
			</div>
			<div className='weather-app__info-item'>
				<WiCloudyWindy className='weather-app__info-icon' />
				<div className='weather-app__info-details'>
					<h1 className='weather-app__info-value'>
						{weather.current.wind_kph} km/h
					</h1>
					<p className='weather-app__info-label'>Speed</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
