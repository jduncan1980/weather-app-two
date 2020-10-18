import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserLocation } from './locationSlice';

const Geolocation: React.FC = (): null => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserLocation());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
};

export default Geolocation;
