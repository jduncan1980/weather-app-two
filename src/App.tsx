import React from 'react';
import './App.css';
import Geolocation from './features/geolocation/Geolocation';
import GetWeatherForm from './features/getWeather/GetWeatherForm';

function App() {
	return (
		<div className='App'>
			<Geolocation />
			<GetWeatherForm />
		</div>
	);
}

export default App;
