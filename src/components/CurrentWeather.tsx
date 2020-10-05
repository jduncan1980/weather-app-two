import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Text, Flex, Heading, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';

export default function CurrentWeather(): React.ReactElement {
	const current = useSelector((state: any) => state.weather.current);
	const { units } = useSelector((state: any) => state.weather);

	return (
		<React.Fragment>
			{current && (
				<Container
					sx={{
						padding: '20px',
						borderRadius: '10px',
					}}
				>
					<Heading>{format(current.dt * 1000, 'EEEE, MMMM do h:mm b')}</Heading>
					<Flex
						sx={{
							width: '25%',
							flexDirection: 'column',
							alignItems: 'center',
							marginY: '20px',
						}}
					>
						<Text>{current.weather[0].description.toUpperCase()}</Text>
						<Image
							src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
						/>
					</Flex>

					<Text>Current Temperature: {formatTemp(current.temp, units)}</Text>
					<Text>Feels Like: {formatTemp(current.feels_like, units)}</Text>
					<Text>Humidity: {current.humidity.toFixed()}%</Text>
					<Text>Sunrise: {format(current.sunrise * 1000, 'h:m b')}</Text>
					<Text>Sunset: {format(current.sunset * 1000, 'h:m b')}</Text>
				</Container>
			)}
		</React.Fragment>
	);
}
