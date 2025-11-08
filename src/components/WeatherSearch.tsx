import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast, Toaster } from 'sonner';

interface WeatherSearchProps {
	setCity: (city: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ setCity }) => {
	return (
		<div className='weather-app__search'>
			<Toaster richColors position='top-right' />
			<AiOutlineSearch className='weather-app__search-icon' />
			<input
				id='query'
				className='weather-app__input'
				type='search'
				placeholder='Search...'
				onKeyDown={e => {
					if (e.key === 'Enter') {
						const inputCity = e.currentTarget.value.trim();
						if (inputCity) {
							setCity(inputCity);
						} else {
							toast.error('Enter city names');
						}
					}
				}}
			/>
		</div>
	);
};

export default WeatherSearch;
