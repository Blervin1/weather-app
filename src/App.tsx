import { useEffect, useState } from 'react';
import DisplayWeather from './components/DisplayWeather';
import Loader from './components/ui/Loader/Loader';
import './styles/normalize.scss';

export const App = () => {
	const [showSnow, setShowSnow] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	useEffect(() => {
		const snowflakes = document.querySelectorAll('.snow__flake');
		snowflakes.forEach(snowflake => {
			const flake = snowflake as HTMLElement;

			const randomSize = (Math.random() * (1.5 - 0.7) + 0.7).toFixed(2);
			const randomDuration = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
			const randomDelay =
				Math.floor(Math.random() * (snowflakes.length / 2)) - 1;

			flake.style.fontSize = `${randomSize}em`;
			flake.style.animationDuration = `${randomDuration}s`;
			flake.style.animationDelay = `${randomDelay}s`;
		});
	}, [showSnow]);

	return (
		<div className='App'>
			<div className='weather__wraper'>
				{isLoading ? <Loader /> : <DisplayWeather onSnow={setShowSnow} />}
			</div>

			{showSnow && (
				<div className='Snow' aria-hidden='true'>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
					<div className='snow__flake'>﹡</div>
				</div>
			)}
		</div>
	);
};

export default App;
