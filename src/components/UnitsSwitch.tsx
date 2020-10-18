import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text } from 'theme-ui';
import Switch from 'react-switch';
import { getWeather, setUnits } from '../features/getWeather/weatherSlice';
import { RootState } from '../store/store';
import farenheit from '../images/fahrenheit.png';
import celcius from '../images/celsius.png';

const UnitsSwitch: React.FC = (): React.ReactElement => {
	const [switchState, setSwitchState] = useState(true);

	const coords = useSelector((state: RootState) => state.location);

	const dispatch = useDispatch();

	const changeUnits = () => {
		setSwitchState(!switchState);
		if (switchState === true) {
			dispatch(setUnits('metric'));
		} else {
			dispatch(setUnits('imperial'));
		}
		dispatch(getWeather({ lat: coords.latitude, lng: coords.longitude }));
	};

	return (
		<Flex
			as='label'
			sx={{
				alignItems: 'center',
				flexDirection: ['column', null, null, 'row'],
				marginTop: ['15px', null, null, 0],
			}}
		>
			<Text
				sx={{
					marginBottom: ['5px', null, null, 0],
					marginRight: [0, null, null, '5px'],
					fontSize: [1, 2, 3],
				}}
			>
				Degree Unit
			</Text>
			<Switch
				checked={switchState}
				onChange={changeUnits}
				checkedIcon={
					<img
						src={farenheit}
						style={{ width: '70%', margin: '4px 5px' }}
						alt='farenheit'
					/>
				}
				uncheckedIcon={
					<img
						src={celcius}
						style={{ width: '70%', margin: '4px 5px' }}
						alt='celcius'
					/>
				}
				offColor='#fff'
				onColor='#fff'
				offHandleColor='#000'
				onHandleColor='#000'
			/>
		</Flex>
	);
};

export default UnitsSwitch;
