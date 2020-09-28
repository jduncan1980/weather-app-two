import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from 'theme-ui';
import DailyWeatherCard from './DailyWeatherCard';

export default function DisplayDailyWeather() {
	const dailyWeather = useSelector((state: any) => state.weather.daily);
	// console.log(dailyWeather);
	return (
		<Flex sx={{ width: '80%', justifyContent: 'center', flexWrap: 'wrap' }}>
			{dailyWeather &&
				dailyWeather.map((day: object) => {
					return <DailyWeatherCard day={day} />;
				})}
		</Flex>
	);
}
