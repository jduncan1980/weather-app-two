import React from 'react';
import './App.css';
import DisplayDailyWeather from './components/DisplayDailyWeather';
import Geolocation from './features/geolocation/Geolocation';
import GetWeatherForm from './features/getWeather/GetWeatherForm';

function App() {
	return (
		<div className='App'>
			<Geolocation />
			<GetWeatherForm />
			<DisplayDailyWeather />
		</div>
	);
}

export default App;
