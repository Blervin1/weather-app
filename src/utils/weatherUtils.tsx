import {
	BsCloudFill,
	BsCloudRainFill,
	BsFillMoonFill,
	BsFillSunFill,
} from 'react-icons/bs';
import { FaCloudMoon, FaCloudMoonRain, FaRegSnowflake } from 'react-icons/fa';
import { IoPartlySunny } from 'react-icons/io5';
import { RiMoonFoggyFill, RiSunFoggyFill } from 'react-icons/ri';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export const formatTime = (localtime: string): string => {
	const date = new Date(localtime);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

export const getWeatherIcon = (
	condition: string,
	localtime: string
): JSX.Element => {
	const conditionLower = condition.toLowerCase();
	const hours = new Date(localtime).getHours();

	const isDayTime = hours >= 6 && hours < 21;

	if (conditionLower.includes('snow')) {
		return <FaRegSnowflake className='weather-app__icon snow' />;
	}

	switch (conditionLower) {
		case 'sunny':
		case 'clear':
			return isDayTime ? (
				<BsFillSunFill className='weather-app__icon sunny' />
			) : (
				<BsFillMoonFill className='weather-app__icon default' />
			);
		case 'partly cloudy':
			return isDayTime ? (
				<IoPartlySunny className='weather-app__icon cloudy' />
			) : (
				<FaCloudMoon className='weather-app__icon cloudy' />
			);
		case 'cloudy':
			return isDayTime ? (
				<TiWeatherPartlySunny className='weather-app__icon cloudy' />
			) : (
				<FaCloudMoon className='weather-app__icon cloudy' />
			);
		case 'rain':
		case 'showers':
			return isDayTime ? (
				<BsCloudRainFill className='weather-app__icon rain' />
			) : (
				<FaCloudMoonRain className='weather-app__icon rain' />
			);
		case 'fog':
		case 'mist':
			return isDayTime ? (
				<RiSunFoggyFill className='weather-app__icon fog' />
			) : (
				<RiMoonFoggyFill className='weather-app__icon fog' />
			);
		default:
			return isDayTime ? (
				<BsCloudFill className='weather-app__icon sunny' />
			) : (
				<BsFillMoonFill className='weather-app__icon default' />
			);
	}
};
