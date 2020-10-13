import React from 'react';
import UnitsSwitch from './UnitsSwitch';
import GetNewWeatherLocationForm from '../features/getWeather/GetNewWeatherLocationForm';
import {Flex} from 'theme-ui';

const Header: React.FC = () => {

  return (
    <Flex sx={{gridArea: 'header', flexDirection: 'column', alignItems: 'center'}}>
      <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
        <GetNewWeatherLocationForm />
       <UnitsSwitch />
      </Flex>
    </Flex>
  )
}

export default Header;