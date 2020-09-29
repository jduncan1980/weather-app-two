/** @jsx jsx */
import React from 'react';
import { Card, Text, Heading, Flex, jsx } from 'theme-ui';
import WeatherIcon from 'react-open-weather-icons';
import removeYear from '../utils/removeYear';

interface Props {
	day: {
		clouds: number;
		dew_point: number;
		dt: number;
		feels_like: object;
		humidity: number;
		pop: number;
		pressure: number;
		sunrise: number;
		sunset: number;
		rain: number;
		temp: {
			min: number;
			max: number;
			day: number;
			eve: number;
			morn: number;
			night: number;
		};
		uvi: number;
		weather: [{ description: string; icon: string; id: number; main: string }];
		wind_deg: number;
		wind_speed: number;
	};
}

export default function DailyWeatherCard({
	day,
}: Props): React.ReactElement<Props> {
	const forecastDay = removeYear(day.dt);

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
				name={day.weather[0].icon}
				// sx={{ width: '50%', color: 'white' }}
			/>
			<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
				<Text>LO: {day.temp.min}</Text>
				<Text>HI: {day.temp.max}</Text>
			</Flex>
		</Card>
	);
}
