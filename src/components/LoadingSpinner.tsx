import React from 'react';
import { Flex, Spinner, Text } from 'theme-ui';

const LoadingSpinner: React.FC = (): React.ReactElement => {
	return (
		<Flex
			sx={{
				gridArea: 'fetching',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Spinner size='96' strokeWidth='6' />
			<Text variant='loading'>Fetching...</Text>
		</Flex>
	);
};

export default LoadingSpinner;
