/** @jsx jsx */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeather} from './weatherSlice';
import { setNewLocation } from '../geolocation/locationSlice';
import { ILocation, ICoords } from '../../types';
import { Flex, Text, jsx } from 'theme-ui';
import SearchBar from '../../components/SearchBar';



const GetNewWeatherLocationForm: React.FC = () => {
	const dispatch = useDispatch();


	const updateLocation = (
		coords: ICoords,
		location: ILocation
	): void => {
		dispatch(setNewLocation(location));
		dispatch(getWeather({ ...coords }));
	};

	return (
		<Flex
			sx={{
				flexDirection: 'column',
				alignItems: 'center',
				marginBottom: '10px'
			}}
		>
			<Text sx={{ fontSize: [1, 2, 4], color: 'text', marginBottom: '10px'}}>
				Change Location:
			</Text>
			<SearchBar updateLocation={updateLocation} />
		</Flex>
	);
}

export default GetNewWeatherLocationForm