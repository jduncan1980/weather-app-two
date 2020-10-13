export interface ILocation {
	country_name: string;
	city: string;
	state: string;
	latitude: number;
	longitude: number;
}

export interface ICoords {
	lat: number;
	lng: number;
}

export interface IWeather {
		description: string; 
		icon: string; 
		id: number; 
		main: string;
}

export interface IPropsDaily {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: {
		day: number;
		eve: number;
		morn: number;
		night: number;
	}
	humidity: number;
	pop: number;
	pressure: number;
	sunrise: number;
	sunset: number;
	rain: number;
	temp: {
		min: number;
		max: number;
		day: number;
		eve: number;
		morn: number;
		night: number;
	}
	uvi: number;
	weather: [IWeather];
	wind_deg: number;
	wind_speed: number;	
}

export interface  IPropsDailyCard {
	day: IPropsDaily;
}

export interface ICurrent {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: number;
	humidity: number;
	pop: number;
	pressure: number;
	sunrise: number;
	sunset: number;
	rain: number;
	temp: number
	uvi: number;
	visibility: number;
	weather: [IWeather];
	wind_deg: number;
	wind_speed: number;	
}

export interface IPropsHourly {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: number;
	humidity: number;
	pop: number;
	pressure: number;
	rain: {
		"1h": number; 
	}
	temp: number;
	visibility: number;
	weather: IWeather[];
	wind_deg: number;
	wind_speed: number;
}

export interface IPropsHourlyCard {
	hour: IPropsHourly;
}