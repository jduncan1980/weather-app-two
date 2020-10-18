/** @jsx jsx */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './weatherSlice';
import { setNewLocation } from '../geolocation/locationSlice';
import { ILocation, ICoords } from '../../types';
import { Flex, Text, jsx } from 'theme-ui';
import SearchBar from './SearchBar';

const GetNewWeatherLocationForm: React.FC = () => {
	const dispatch = useDispatch();

	const updateLocation = (coords: ICoords, location: ILocation): void => {
		dispatch(setNewLocation(location));
		dispatch(getWeather({ ...coords }));
	};

	return (
		<Flex
			as='label'
			sx={{
				flexDirection: ['column', null, null, 'row'],
				alignItems: 'center',
				marginRight: [0, null, null, '20px'],
				color: 'text',
			}}
		>
			<Text
				sx={{
					fontSize: [1, 2, 3],
					marginRight: [0, null, null, '5px'],
					marginBottom: ['5px', null, null, 0],
					color: 'white',
				}}
			>
				Change Location
			</Text>
			<SearchBar updateLocation={updateLocation} />
		</Flex>
	);
};

export default GetNewWeatherLocationForm;
