import React from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './weatherSlice';
import { setNewLocation } from '../geolocation/locationSlice';
import { Flex, Text } from 'theme-ui';
import SearchBar from '../../components/SearchBar';

interface ILocation {
	country_name: string;
	city: string;
	state: string;
	latitude: number;
	longitude: number;
}

export default function GetWeatherForm() {
	const dispatch = useDispatch();

	const updateLocation = (
		coords: { lat: number; lng: number },
		location: ILocation
	) => {
		dispatch(setNewLocation(location));
		dispatch(getWeather(coords));
	};

	return (
		<Flex>
			<Text>Enter City:</Text>
			<SearchBar updateLocation={updateLocation} />
		</Flex>
	);
}
