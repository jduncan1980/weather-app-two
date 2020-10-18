import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Heading } from 'theme-ui';
import { RootState } from '../store/store';
import { IPropsHourly } from '../types';
import HourlyWeatherCard from './HourlyWeatherCard';

const DisplayHourlyWeather: React.FC = () => {
	const hourlyWeather = useSelector((state: RootState) => state.weather.hourly);

	return (
		<Box sx={{ gridArea: 'hourly', width: '100%' }}>
			<Heading sx={{ marginBottom: '10px', textAlign: 'center' }}>
				Hourly Forecast
			</Heading>
			<Flex
				sx={{
					overflowX: 'scroll',
					width: '100%',
					border: '1px solid black',
					borderRadius: '10px',
					padding: '15px',
					bg: 'yellow',
					boxShadow: 'inset 0px 0px 10px 4px rgba(0,0,0,0.6)',
				}}
			>
				{hourlyWeather &&
					hourlyWeather.map((hour: IPropsHourly) => {
						return <HourlyWeatherCard hour={hour} key={hour.dt} />;
					})}
				{/* Empty Box to add space to end of list */}
				<Box sx={{ minWidth: '50px' }} />
			</Flex>
		</Box>
	);
};

export default DisplayHourlyWeather;
