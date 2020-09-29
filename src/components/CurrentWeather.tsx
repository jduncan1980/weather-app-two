import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Text, Flex, Heading } from 'theme-ui';
import WeatherIcon from 'react-open-weather-icons';
import { format } from 'date-fns';

export default function CurrentWeather(): React.ReactElement {
	const current = useSelector((state: any) => state.weather.current);
	console.log(current);
	// const currentDay = new Date(current.dt);

	return (
		<Container sx={{ width: '80%', bg: 'muted' }}>
			{current && (
				<React.Fragment>
					<Heading>{format(current.dt * 1000, 'EEEE, PPPPpppp')}</Heading>
					<WeatherIcon name={current.weather[0].icon} />
					<Text>{current.weather[0].description.toUpperCase()}</Text>
					<Text>Current Temperature: {current.temp}</Text>
					<Text>Feels Like: {current.feels_like}</Text>
					<Text>Humidity: {current.humidity}</Text>
					<Text>Sunrise: {format(current.sunrise * 1000, 'h:m b')}</Text>
					<Text>Sunset: {format(current.sunset * 1000, 'h:m bb')}</Text>
				</React.Fragment>
			)}
		</Container>
	);
}
