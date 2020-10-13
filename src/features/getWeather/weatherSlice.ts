import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { RootState } from '../../store/store';
import { ICurrent, IPropsDaily, IPropsHourly } from '../../types';
const key = process.env.REACT_APP_WEATHER_KEY;

interface IArgs {
	lat: number | null;
	lng: number | null;
}

export const getWeather = createAsyncThunk(
	'location/getUserWeather',
	async (args: IArgs, { getState }) => {
		const state: any = getState();
		if (args.lat && args.lng) {
			const weather = await axios.get(
				`http://api.openweathermap.org/data/2.5/onecall?lat=${args.lat}&lon=${args.lng}&units=${state.weather.units}&APPID=${key}`
			);
			return weather.data;
		} else {
			return null;
		}
	}
);

interface IState {
	loading: boolean;
	error: null | string;
	current: null | ICurrent;
	minutely: null | object[];
	hourly: null | IPropsHourly[];
	daily: null | IPropsDaily[];
	units: 'imperial' | 'metric';
}

const initialState: IState = {
	loading: false,
	error: null,
	current: null,
	minutely: null,
	hourly: null,
	daily: null,
	units: 'imperial',
};

const weatherSlice = createSlice({
	name: 'weather',
	initialState: initialState,
	reducers: {
		setUnits: (state, { payload }) => {
			state.units = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getWeather.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(getWeather.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.current = payload.current;
			state.minutely = payload.minutely;
			state.hourly = payload.hourly;
			state.daily = payload.daily;
		});

		builder.addCase(getWeather.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = `Something went wrong... ${payload}`;
			state.current = null;
			state.minutely = null;
			state.hourly = null;
			state.daily = null;
		});
	},
});

export const { setUnits } = weatherSlice.actions;
export default weatherSlice.reducer;
