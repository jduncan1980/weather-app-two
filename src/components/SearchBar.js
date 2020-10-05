/** @jsx jsx */
import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { jsx } from 'theme-ui';

export default function SearchBar({ updateLocation }) {
	return (
		<AlgoliaPlaces
			placeholder='City'
			// sx={{ width: ['90%', null, '50%'] }}
			options={{
				appId: process.env.REACT_APP_ALGOLIA_ID,
				apiKey: process.env.REACT_APP_ALGOLIA_KEY,
			}}
			onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
				const newLocation = {
					country_name: suggestion.country,
					city: suggestion.name,
					state: suggestion.administrative,
					latitude: suggestion.latlng.lat,
					longitude: suggestion.latlng.lng,
				};
				updateLocation(suggestion.latlng, newLocation);
			}}
			// onSuggestions={({ rawAnswer, query, suggestions }) =>
			// 	console.log(
			// 		'Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.'
			// 	)
			// }
			// onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
			// 	console.log('Fired when arrows keys are used to navigate suggestions.')
			// }
			// onClear={() => console.log('Fired when the input is cleared.')}
			// onLimit={({ message }) =>
			// 	console.log('Fired when you reached your current rate limit.')
			// }
			onError={({ message }) => alert(`Something went wrong... ${message}`)}
		/>
	);
}
