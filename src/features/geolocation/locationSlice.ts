import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getWeather } from '../getWeather/weatherSlice';
const key = process.env.REACT_APP_LOCATION_KEY;

export const getUserLocation = createAsyncThunk(
	'location/getUserLocation',
	async (args: void, { dispatch }) => {
		const location = await axios.get(`https://geolocation-db.com/json/${key}`);
		// console.log(location);
		await dispatch(
			getWeather({
				lat: location.data.latitude,
				lng: location.data.longitude,
			})
		);
		return location.data;
	}
);

interface IState {
	loading: boolean;
	error: null | string;
	country_name: null | string;
	city: null | string;
	state: null | string;
	latitude: null | number;
	longitude: null | number;
}

const initialState: IState = {
	loading: false,
	error: null,
	country_name: null,
	city: null,
	state: null,
	latitude: null,
	longitude: null,
};

const locationSlice = createSlice({
	name: 'location',
	initialState: initialState,
	reducers: {
		setNewLocation: (state, { payload }) => {
			state.country_name = payload.country_name;
			state.city = payload.city;
			state.state = payload.state;
			state.latitude = payload.latitude;
			state.longitude = payload.longitude;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserLocation.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(getUserLocation.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.country_name = payload.country_name;
			state.city = payload.city;
			state.state = payload.state;
			state.latitude = payload.latitude;
			state.longitude = payload.longitude;
		});

		builder.addCase(getUserLocation.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = `Something went wrong... ${payload}`;
			state.country_name = null;
			state.city = null;
			state.state = null;
			state.latitude = null;
			state.longitude = null;
		});
	},
});

export const { setNewLocation } = locationSlice.actions;
export default locationSlice.reducer;
