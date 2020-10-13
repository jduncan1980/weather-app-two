import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Flex} from 'theme-ui';
import Switch from 'react-switch';
import { getWeather, setUnits } from '../features/getWeather/weatherSlice';
import {RootState} from '../store/store';

const UnitsSwitch: React.FC = () => {
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
			as="label"
				sx={{
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Switch
					checked={switchState}
					onChange={changeUnits}
					checkedIcon={false}
					uncheckedIcon={false}
				/>
				C&deg;/F&deg;
			</Flex>
  )
}

export default UnitsSwitch;