import React from 'react';
import { Card, Text, Heading, Flex, Box, jsx, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { useSelector } from 'react-redux';

export default function HourlyWeatherCard({ hour }: any): React.ReactElement {
	const { units } = useSelector((state: any) => state.weather);
	return (
		<Card
			sx={{
				flex: '0 0 auto',
				margin: '20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				border: '1px solid black',
				padding: '1%',
				borderRadius: '10px',
			}}
		>
			<Heading>{format(hour.dt * 1000, 'h:mm b')}</Heading>
			<Text>Temperature: {formatTemp(hour.temp, units)}</Text>
			<Text>Feels Like: {formatTemp(hour.feels_like, units)}</Text>
			<Flex sx={{ width: '90%', color: 'black' }}>
				<Image
					src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
					sx={{ width: '100%', filter: 'grayscale(100%)' }}
				/>
			</Flex>
			<Text>Humidity: {hour.humidity}%</Text>
		</Card>
	);
}
