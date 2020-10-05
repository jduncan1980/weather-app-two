import React from 'react';
import { Container } from 'theme-ui';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DisplayDailyWeather from './components/DisplayDailyWeather';
import DisplayHourlyWeather from './components/DisplayHourlyWeather';
import LocationContainer from './components/LocationContainer';
import background from './images/background.jpg';

function App(): React.ReactElement {
	return (
		<Container
			sx={{
				padding: ['5px', null, '20px'],
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'blue',
				background: `linear-gradient(349deg, rgba(187,209,229,0.50) 0%, rgba(187,209,229,0.50) 100%), url(${background})`,
				minHeight: '100vh',
				borderRadius: 'none',
			}}
		>
			<LocationContainer />
			<CurrentWeather />
			<DisplayHourlyWeather />
			<DisplayDailyWeather />
		</Container>
	);
}

export default App;
