/** @jsx jsx */
import React from 'react';
import { Container, Grid, jsx } from 'theme-ui';
import CurrentWeather from './components/CurrentWeather';
import DisplayDailyWeather from './components/DisplayDailyWeather';
import DisplayHourlyWeather from './components/DisplayHourlyWeather';
import Header from './components/Header';
import Geolocation from './features/geolocation/Geolocation';
import GetNewWeatherLocationForm from './features/getWeather/GetNewWeatherLocationForm';
import background from './images/background.jpg';

const App: React.FC = () => {
	return (
		<Grid
		// columns={4}
			sx={{
				padding: ['5px', null, '20px'],
				backgroundColor: 'blue',
				background: `linear-gradient(349deg, rgba(187,209,229,0.50) 0%, rgba(187,209,229,0.50) 100%), url(${background})`,
				minHeight: '100vh',
				overflowX: 'hidden',
				gridTemplateColumns: "repeat(4, 1fr)",
				gridTemplateAreas: 
				'". . . ." "current current header header" "current current daily daily"'
			}}
		>
			<Geolocation />
			<Header />
			<CurrentWeather />
			<DisplayDailyWeather />
		</Grid>
	);
}

export default App;
