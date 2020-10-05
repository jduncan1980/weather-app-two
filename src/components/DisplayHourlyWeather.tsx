import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Flex } from 'theme-ui';
import HourlyWeatherCard from './HourlyWeatherCard';

export default function DisplayHourlyWeather(): React.ReactElement {
	const hourlyWeather = useSelector((state: any) => state.weather.hourly);
	console.log(hourlyWeather);
	return (
		// <Container sx={{ overflow: 'hidden', width: '60%' }}>
		<Flex
			sx={{
				overflowX: 'auto',
				justifyContent: 'space-between',
				width: '60%',
				border: '4px solid black',
				borderRadius: '10px',
				padding: '30px',
			}}
		>
			{hourlyWeather &&
				hourlyWeather.map((hour: any) => {
					return <HourlyWeatherCard hour={hour} key={hour.dt} />;
				})}
		</Flex>
		// </Container>
	);
}
