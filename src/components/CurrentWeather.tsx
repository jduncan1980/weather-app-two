import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Text, Flex, Heading } from 'theme-ui';
import WeatherIcon from 'react-open-weather-icons';

export default function CurrentWeather() {
	const current = useSelector((state: any) => state.weather.current);
	console.log(current);
	// const currentDay = new Date(current.dt);
	return (
		<Container sx={{ width: '80%', bg: 'muted' }}>
			{/* {current && <Heading>{currentDay}</Heading>} */}
			{/* <Heading>{currentDay}</Heading>
			<WeatherIcon name={current.weather[0].icon} /> */}
		</Container>
	);
}
