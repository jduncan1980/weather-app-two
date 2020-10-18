import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Text, Flex, Heading, Image } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { RootState } from '../store/store';
import DisplayHourlyWeather from './DisplayHourlyWeather';

const CurrentWeather: React.FC = (): React.ReactElement => {
	const current = useSelector((state: RootState) => state.weather.current);
	const location = useSelector((state: RootState) => state.location);
	const { units } = useSelector((state: RootState) => state.weather);

	return (
		<Flex sx={{ gridArea: 'current' }}>
			{current && (
				<Grid
					sx={{
						gridTemplateColumns: 'repeat(2, 1fr)',
						gridTemplateAreas: [
							'"current current" "location location" "time time" "icon icon" "details details" "hourly hourly"',
							null,
							null,
							'"current current" "location location" "time time" "icon details" "hourly hourly"',
						],
						placeItems: 'start center',
						borderRadius: '10px',
						padding: '40px',
						height: '100%',
						width: '100%',
					}}
				>
					<Text sx={{ fontSize: [3, 4, 5], gridArea: 'current' }}>
						Current Weather for
					</Text>
					<Heading
						sx={{
							fontSize: [4, 5, 6],
							textAlign: 'center',
							marginBottom: '10px',
							gridArea: 'location',
						}}
					>
						{/* If Error, show error, else show location. If there is a state, show state, else show nothing for state. */}
						{location.error
							? location.error
							: `${location.city}, ${
									location.state ? `${location.state},` : ''
							  } ${
									location.country_name === 'United States of America'
										? 'United States'
										: location.country_name
							  }`}
					</Heading>
					<Heading sx={{ gridArea: 'time', textAlign: 'center' }}>
						{format(current.dt * 1000, 'EEEE, MMMM do h:mm b')}
					</Heading>
					<Flex
						sx={{
							alignSelf: ['stretch'],
							flexDirection: 'column',
							alignItems: 'center',
							fontSize: [2, 3, 4],
							width: '100%',
							gridArea: 'icon',
							bg: 'cardBG',
							padding: '20px',
							borderRadius: '10px',
							border: '1px solid black',
							boxShadow: 'inset 0px 0px 10px 4px rgba(0,0,0,0.6)',
						}}
					>
						<Text>{current.weather[0].description.toUpperCase()}</Text>
						<Image
							src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
						/>
					</Flex>

					<Flex
						sx={{
							alignSelf: 'stretch',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
							gridArea: 'details',
							fontSize: [2, 3, 4],
							bg: 'yellow',
							padding: '20px',
							borderRadius: '10px',
							border: '1px solid black',
							boxShadow: 'inset 0px 0px 10px 4px rgba(0,0,0,0.6)',
						}}
					>
						<Text>Current Temperature: {formatTemp(current.temp, units)}</Text>
						<Text>Feels Like: {formatTemp(current.feels_like, units)}</Text>
						<Text>Humidity: {current.humidity.toFixed()}%</Text>
						<Text>Sunrise: {format(current.sunrise * 1000, 'h:mm b')}</Text>
						<Text>Sunset: {format(current.sunset * 1000, 'h:mm b')}</Text>
					</Flex>
					<DisplayHourlyWeather />
				</Grid>
			)}
		</Flex>
	);
};

export default CurrentWeather;
