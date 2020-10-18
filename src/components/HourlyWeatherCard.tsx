import React from 'react';
import { Card, Text, Heading, Flex, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IPropsHourlyCard } from '../types';

const HourlyWeatherCard: React.FC<IPropsHourlyCard> = ({
	hour,
}): React.ReactElement => {
	const { units } = useSelector((state: RootState) => state.weather);
	console.log(hour);
	return (
		<Card
			sx={{
				flex: '0 0 auto',
				margin: '20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				border: '1px solid black',
				padding: '1%',
				borderRadius: '10px',
				bg: 'cardBG',
			}}
		>
			<Heading>{format(hour.dt * 1000, 'h:mm b')}</Heading>
			<Text>Temperature: {formatTemp(hour.temp, units)}</Text>
			<Text>Feels Like: {formatTemp(hour.feels_like, units)}</Text>
			<Flex sx={{ width: '90%' }}>
				<Image
					src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
				/>
			</Flex>
			<Text>Humidity: {hour.humidity}%</Text>
		</Card>
	);
};

export default HourlyWeatherCard;
