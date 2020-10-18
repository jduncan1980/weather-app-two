import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { ILocation, ICoords } from '../../types';

interface ISuggestion {
	country: string;
	name: string;
	administrative: string;
	latlng: ICoords;
}

export interface IUpdateLocation {
	updateLocation: (latlng: ICoords, newLocation: ILocation) => void;
}

const SearchBar: React.FC<IUpdateLocation> = ({ updateLocation }) => {
	return (
		<AlgoliaPlaces
			placeholder='City'
			options={{
				appId: process.env.REACT_APP_ALGOLIA_ID,
				apiKey: process.env.REACT_APP_ALGOLIA_KEY,
			}}
			onChange={({ suggestion }: { suggestion: ISuggestion }) => {
				console.log(suggestion);
				const newLocation: ILocation = {
					country_name: suggestion.country,
					city: suggestion.name,
					state: suggestion.administrative,
					latitude: suggestion.latlng.lat,
					longitude: suggestion.latlng.lng,
				};
				updateLocation(suggestion.latlng, newLocation);
			}}
			onError={({ message }: { message: string }) =>
				alert(`Something went wrong... ${message}`)
			}
		/>
	);
};

export default SearchBar;
