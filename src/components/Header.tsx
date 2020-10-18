import React from 'react';
import UnitsSwitch from './UnitsSwitch';
import GetNewWeatherLocationForm from '../features/getWeather/GetNewWeatherLocationForm';
import { Flex, Heading } from 'theme-ui';
import Geolocation from '../features/geolocation/Geolocation';

const Header: React.FC = (): React.ReactElement => {
	return (
		<Flex
			as='header'
			sx={{
				gridArea: 'header',
				flexDirection: ['column', null, null, 'row'],
				alignItems: 'center',
				justifyContent: 'space-between',
				bg: 'primary',
				padding: 3,
				color: 'muted',
				maxHeight: [null, null, null, '150px'],
			}}
		>
			<Geolocation />
			<Heading
				sx={{ fontSize: [4, 5, 7], marginBottom: ['10px', null, null, 0] }}
				as='h1'
			>
				Cloud-9 Weather
			</Heading>
			<Flex
				sx={{
					width: ['100%', null, null, '50%'],
					justifyContent: 'flex-end',
					alignItems: 'center',
					flexDirection: ['column', null, null, 'row'],
				}}
			>
				<GetNewWeatherLocationForm />
				<UnitsSwitch />
			</Flex>
		</Flex>
	);
};

export default Header;
