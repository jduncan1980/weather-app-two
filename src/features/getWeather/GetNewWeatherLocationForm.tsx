/** @jsx jsx */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, setUnits } from './weatherSlice';
import { setNewLocation } from '../geolocation/locationSlice';

import { Flex, Text, jsx } from 'theme-ui';
import SearchBar from '../../components/SearchBar';
import Switch from 'react-switch';

interface ILocation {
	country_name: string;
	city: string;
	state: string;
	latitude: number;
	longitude: number;
}

export default function GetNewWeatherLocationForm(): React.ReactElement {
	const dispatch = useDispatch();
	const coords = useSelector((state: any) => state.location);
	const [switchState, setSwitchState] = useState(true);

	const updateLocation = (
		coords: { lat: number; lng: number },
		location: ILocation
	) => {
		dispatch(setNewLocation(location));
		dispatch(getWeather({ ...coords }));
	};

	const changeUnits = () => {
		setSwitchState(!switchState);
		if (switchState === true) {
			dispatch(setUnits('metric'));
			console.log('metric');
		} else {
			dispatch(setUnits('imperial'));
			console.log('imperial');
		}
		dispatch(getWeather({ lat: coords.latitude, lng: coords.longitude }));
	};

	return (
		<Flex
			sx={{
				flexDirection: ['column'],
				alignItems: 'center',
				justifyContent: 'space-between',
				marginY: '30px',
				// bg: 'muted',
			}}
		>
			<Text sx={{ fontSize: [3, 4, 5], marginBottom: '10px', color: '' }}>
				Enter City:
			</Text>
			<SearchBar updateLocation={updateLocation} />
			<label
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '10px',
				}}
			>
				<Switch
					checked={switchState}
					onChange={changeUnits}
					checkedIcon={false}
					uncheckedIcon={false}
				/>
				C&deg;/F&deg;
			</label>
		</Flex>
	);
}
