import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from './locationSlice';
// import { Spinner, Text, Heading, Flex } from 'theme-ui';
import {RootState} from '../../store/store';

const Geolocation: React.FC = () => {
	const dispatch = useDispatch();
	const location = useSelector((state: RootState) => state.location);

	useEffect(() => {
		dispatch(getUserLocation());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
}

export default Geolocation;