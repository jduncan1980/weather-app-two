import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Container } from 'theme-ui';
import DailyWeatherCard from './DailyWeatherCard';

interface Props {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: object;
	humidity: number;
	pop: number;
	pressure: number;
	sunrise: number;
	sunset: number;
	rain: number;
	temp: {
		min: number;
		max: number;
		day: number;
		eve: number;
		morn: number;
		night: number;
	};
	uvi: number;
	weather: [{ description: string; icon: string; id: number; main: string }];
	wind_deg: number;
	wind_speed: number;
}

export default function DisplayDailyWeather(): React.ReactElement {
	const dailyWeather = useSelector((state: any) => state.weather.daily);
	return (
		<Container>
			<Flex sx={{ width: '80%', justifyContent: 'center', flexWrap: 'wrap' }}>
				{dailyWeather &&
					dailyWeather.map((day: Props) => {
						return <DailyWeatherCard day={day} key={day.dt} />;
					})}
			</Flex>
		</Container>
	);
}
