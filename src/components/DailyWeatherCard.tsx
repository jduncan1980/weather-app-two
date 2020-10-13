/** @jsx jsx */
import React from 'react';
import { Card, Text, Heading, Flex, Box, jsx, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { useSelector } from 'react-redux';
import {IPropsDailyCard as Props} from '../types';
import { RootState } from '../store/store';


const DailyWeatherCard: React.FC<Props> = ({day}) => {
	const forecastDay = format(day.dt * 1000, 'E MMM do');
	const { units } = useSelector((state: RootState) => state.weather);

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
					// sx={{ width: '100%', filter: 'grayscale(100%)' }}
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

export default DailyWeatherCard;