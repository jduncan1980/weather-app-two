import React from 'react';
import { Container } from 'theme-ui';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import DisplayDailyWeather from './components/DisplayDailyWeather';
import LocationContainer from './components/LocationContainer';
import background from './images/background.jpg';

function App(): React.ReactElement {
	return (
		<Container
			sx={{
				padding: '30px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'blue',
				background: `linear-gradient(349deg, rgba(26,26,65,0.75) 0%, rgba(2,24,41,0.75) 100%), url(${background})`,
				minHeight: '100vh',
				// color: 'white',
			}}
		>
			<LocationContainer />
			<CurrentWeather />
			<DisplayDailyWeather />
		</Container>
	);
}

export default App;
