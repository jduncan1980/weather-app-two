/** @jsx jsx */
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import { useSelector } from 'react-redux';
import CurrentWeather from './components/CurrentWeather';
import DisplayDailyWeather from './components/DisplayDailyWeather';
import Header from './components/Header';
import background from './images/background.jpg';
import { RootState } from './store/store';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
	const { loading: locationLoading } = useSelector(
		(state: RootState) => state.location
	);
	const { loading: weatherLoading } = useSelector(
		(state: RootState) => state.weather
	);

	return (
		<Grid
			sx={{
				padding: ['3px', null, '20px'],
				backgroundColor: 'blue',
				background: `linear-gradient(349deg, rgba(187,209,229,0.50) 0%, rgba(187,209,229,0.50) 100%), url(${background})`,
				minHeight: '100vh',
				overflowX: 'hidden',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridTemplateAreas: [
					'"header header header header" "fetching fetching fetching fetching" "current current current current"  "daily daily daily daily"',
					null,
					null,
					null,
					'"header header header header" "fetching fetching fetching fetching" "current current daily daily" "current current daily daily"',
				],
			}}
		>
			<Header />
			{locationLoading || weatherLoading ? (
				<LoadingSpinner />
			) : (
				<React.Fragment>
					<CurrentWeather />
					<DisplayDailyWeather />
				</React.Fragment>
			)}
		</Grid>
	);
};

export default App;
