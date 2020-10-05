import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from './locationSlice';
import { Spinner, Text, Heading, Flex } from 'theme-ui';

export default function Geolocation() {
	const dispatch = useDispatch();
	const location = useSelector((state: any) => state.location);

	useEffect(() => {
		dispatch(getUserLocation());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// If Fetching location load...
	if (location.loading) {
		return (
			<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
				<Spinner size='96' strokeWidth='6' />
				<Text variant='loading'>Fetching Location...</Text>
			</Flex>
		);
	}
	// Else load Location or Error
	return (
		<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
			<Heading
				sx={{ fontSize: [1, 2, 5, 6], textAlign: 'center', margin: '10px' }}
			>
				{location.error
					? location.error
					: `${location.city}, ${location.state}, ${location.country_name}`}
			</Heading>
		</Flex>
	);
}
