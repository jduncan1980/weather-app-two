import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Text, Flex, Heading, Image, Spinner } from 'theme-ui';
import { format } from 'date-fns';
import { formatTemp } from '../utils/formatTemp';
import { RootState } from '../store/store';
import DisplayHourlyWeather from './DisplayHourlyWeather';

const CurrentWeather: React.FC = () =>  {
	const current = useSelector((state: RootState) => state.weather.current);
	const location = useSelector((state: RootState) => state.location)
	const { units, loading } = useSelector((state: RootState) => state.weather);
	console.log(current)

	if (location.loading || loading) {
		return (
			<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
				<Spinner size='96' strokeWidth='6' />
				<Text variant='loading'>Fetching Location...</Text>
			</Flex>
		);
	}

	return (
		<Flex sx={{gridArea: 'current',  }}>
			{current && (
				<Grid
					sx={{
						gridTemplateColumns: "repeat(2, 1fr)",
						gridTemplateAreas: '"current current" "location location" "time time" "icon details" "hourly hourly"',
						placeItems: 'start center',
						borderRadius: '10px', 
						border: '1px solid rgba(0,4,7,0.5)',
						bg: 'rgba(128,133,139,0.5)', 
						boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.36)',
						padding: '40px',
						height: '100%', 
						width: '100%'
					}}
				>
					<Text sx={{fontSize: [0, 1, 2, 4], gridArea: 'current'}}>Current Weather for</Text>
					<Heading
				sx={{ fontSize: [1, 2, 5, 6], textAlign: 'center', marginBottom: '10px', gridArea: 'location' }}
			>
				{location.error
					? location.error
					: `${location.city}, ${location.state}, ${location.country_name}`}
			</Heading>
					<Heading sx={{gridArea: 'time'}}>{format(current.dt * 1000, 'EEEE, MMMM do h:mm b')}</Heading>
					<Flex
						sx={{
							flexDirection: 'column',
							alignItems: 'center',
							fontSize: [2, 3 ,4],
							gridArea: 'icon'
						}}
					>
							<Text>{current.weather[0].description.toUpperCase()}</Text>
						<Image
							src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
							
						/>
					</Flex>

				<Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '80%', gridArea: 'details', fontSize: [2, 3, 4]}}>
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
}

export default CurrentWeather;