import React from 'react';
import GetNewWeatherLocation from '../features/getWeather/GetNewWeatherLocationForm';
import Geolocation from '../features/geolocation/Geolocation';
import { Container } from 'theme-ui';

export default function LocationContainer(): React.ReactElement {
	return (
		<Container
			sx={{
				bg: 'muted',
				paddingY: '2%',
				borderRadius: '10px',
				width: '70%',
				marginBottom: '2%',
			}}
		>
			<Geolocation />
			<GetNewWeatherLocation />
		</Container>
	);
}
