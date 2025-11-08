export const fetchWeatherData = async (apiKey: string, city: string) => {
	const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error: ${response.status} - ${response.statusText}`);
		}
		const data = await response.json();

		if (data && data.location && data.current) {
			return data;
		} else {
			throw new Error('Invalid data structure');
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};
