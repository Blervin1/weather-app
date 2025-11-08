export interface DisplayWeatherProps {
	onSnow: (snow: boolean) => void;
}

export interface WeatherData {
	location: {
		name: string;
		region: string;
		country: string;
		localtime: string;
	};
	current: {
		temp_c: number;
		feelslike_c: number;
		humidity: number;
		wind_kph: number;
		condition: {
			text: string;
			icon: string;
		};
	};
}

export interface WeatherDetailsProps {
	weather: WeatherData;
}

export interface WeatherIconProps {
	condition: string;
	time: WeatherData;
}
