import React from 'react';
import GetNewWeatherLocation from '../features/getWeather/GetNewWeatherLocationForm';
import Geolocation from '../features/geolocation/Geolocation';
import { Container } from 'theme-ui';

export default function LocationContainer(): React.ReactElement {
	return (
		<Container
			sx={{
				padding: '20px',
				borderRadius: '10px',
			}}
		>
			<Geolocation />
			<GetNewWeatherLocation />
		</Container>
	);
}
