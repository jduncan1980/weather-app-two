import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Heading } from 'theme-ui';
import { RootState } from '../store/store';
import DailyWeatherCard from './DailyWeatherCard';
import { IPropsDaily } from '../types';

const DisplayDailyWeather: React.FC = () => {
	const { daily: dailyWeather } = useSelector(
		(state: RootState) => state.weather
	);
	return (
		<Flex
			sx={{
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gridArea: 'daily',
				padding: '20px',
				borderRadius: '10px',
			}}
		>
			<Heading sx={{ marginBottom: '10px', fontSize: [3, 4, 5] }}>
				Seven Day Forecast
			</Heading>
			<Flex sx={{ width: '80%', justifyContent: 'center', flexWrap: 'wrap' }}>
				{dailyWeather &&
					dailyWeather.map((day: IPropsDaily, index: number) => {
						if (index === 0) {
							return null;
						}
						return <DailyWeatherCard day={day} key={day.dt} />;
					})}
			</Flex>
		</Flex>
	);
};

export default DisplayDailyWeather;
