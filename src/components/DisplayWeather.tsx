import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { fetchWeatherData } from '../services/weatherService';
import { DisplayWeatherProps, WeatherData } from '../types/weatherTypes';
import './DisplayWeather.scss';
import WeatherDetails from './WeatherDetails';
import WeatherInfo from './WeatherInfo';
import WeatherSearch from './WeatherSearch';
import Loader from './ui/Loader/Loader';

const DisplayWeather: React.FC<DisplayWeatherProps> = ({ onSnow }) => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [city, setCity] = useState<string>('bydgoszcz');
	const API_KEY = '60f77f54a8484c18b0e174833252101';

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const data = await fetchWeatherData(API_KEY, city);
				setWeather(data);
				const isSnowing = data.current.condition.text
					.toLowerCase()
					.includes('snow');
				onSnow(isSnowing);
			} catch (error) {
				toast.error('City not found or invalid data');
				setWeather(null);
			}
		};

		fetchWeather();
	}, [city, onSnow]);

	return (
		<>
			<div className='weather-app'>
				<div className='weather-app__container'>
					<div className='weather-app__display'>
						<WeatherSearch setCity={setCity} />
						{weather ? (
							<>
								<WeatherDetails weather={weather} />
								<WeatherInfo weather={weather} />
							</>
						) : (
							<Loader />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default DisplayWeather;
