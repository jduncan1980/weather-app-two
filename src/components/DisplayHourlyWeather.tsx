import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Flex, Heading } from 'theme-ui';
import { RootState } from '../store/store';
import { IPropsHourly } from '../types';
import HourlyWeatherCard from './HourlyWeatherCard';

const DisplayHourlyWeather: React.FC = () => {
	const hourlyWeather = useSelector((state: RootState) => state.weather.hourly);

	return (
		<Flex sx={{gridArea: 'hourly', flexDirection: 'column', alignItems: 'center'}}>
			<Heading sx={{marginBottom: '10px'}}>Hourly Forecast</Heading>
			<Flex
			sx={{
				overflowX: 'auto',
				justifyContent: 'space-between',
				width: '10%',
				border: '2px solid black',
				borderRadius: '10px',
				padding: '10px',
			}}
		>	
			{hourlyWeather &&
				hourlyWeather.map((hour: IPropsHourly) => {
					return <HourlyWeatherCard hour={hour} key={hour.dt} />;
				})}
				{/* Empty Box to add space to end of list */}
				<Box sx={{minWidth: '50px'}}/>
			</Flex>
		</Flex>
	);
};

export default DisplayHourlyWeather
