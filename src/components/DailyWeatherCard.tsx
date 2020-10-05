/** @jsx jsx */
import React from 'react';
import { Card, Text, Heading, Flex, Box, jsx, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { useSelector } from 'react-redux';
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
	const forecastDay = format(day.dt * 1000, 'E MMM do');
	const { units } = useSelector((state: any) => state.weather);

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
			}}
		>
			<Heading>{forecastDay}</Heading>
			<Box sx={{ width: '90%', color: 'black' }}>
				<Image
					src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
					sx={{ width: '100%', filter: 'grayscale(100%)' }}
				/>
			</Box>
			<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
				<Text>LO: {formatTemp(day.temp.min, units)}</Text>
				<Text>HI: {formatTemp(day.temp.max, units)}</Text>
				<Text>Sunrise: {format(day.sunrise * 1000, 'h:mm b')}</Text>
				<Text>Sunset: {format(day.sunset * 1000, 'h:mm b')}</Text>
			</Flex>
		</Card>
	);
}
