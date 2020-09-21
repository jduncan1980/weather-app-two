import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import locationReducer from '../features/geolocation/locationSlice';
import weatherReducer from '../features/getWeather/weatherSlice';

const reducer = {
	location: locationReducer,
	weather: weatherReducer,
};
const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});
export default store;
