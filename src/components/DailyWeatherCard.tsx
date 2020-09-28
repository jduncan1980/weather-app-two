/** @jsx jsx */
import React from 'react';
import { Card, Text, Heading, Flex, jsx } from 'theme-ui';
import WeatherIcon from 'react-open-weather-icons';
import removeYear from '../utils/removeYear';

export default function DailyWeatherCard(props: { day: any }) {
	const forecastDay = removeYear(props.day.dt);
	return (
		<Card
			sx={{
				margin: '1%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				border: '1px solid black',
				padding: '1%',
				borderRadius: '10px',
				bg: 'muted',
			}}
		>
			<Heading>{forecastDay}</Heading>
			<WeatherIcon
				name={props.day.weather[0].icon}
				// sx={{ width: '50%', color: 'white' }}
			/>
			<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
				<Text>LO: {parseInt(props.day.temp.min)}</Text>
				<Text>HI: {parseInt(props.day.temp.max)}</Text>
			</Flex>
		</Card>
	);
}
