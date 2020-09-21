/** @jsx jsx */
import React from 'react';
import { Card, Text, Heading, Flex, jsx } from 'theme-ui';
import WeatherIcon from 'react-open-weather-icons';
import dayOfWeek from '../utils/dayOfWeek';

export default function DailyWeatherCard(props: { day: any }) {
	const day: number = new Date(props.day.dt * 1000).getDay();
	const fullDate: number = new Date(props.day.dt * 1000).getDate();
	return (
		<Card
			sx={{ margin: '1%', height: [100, null, 200], width: [150, null, 300] }}
		>
			<Heading>{dayOfWeek(day)}</Heading>
			<Heading>{fullDate}</Heading>
			<WeatherIcon name={props.day.weather[0].icon} />
			<Flex sx={{ justifyContent: 'space-around' }}>
				<Text>HI: {parseInt(props.day.temp.max)}</Text>
				<Text>LO: {parseInt(props.day.temp.min)}</Text>
			</Flex>
		</Card>
	);
}
