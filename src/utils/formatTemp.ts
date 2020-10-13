export const formatTemp = (temp: number, units: 'metric' | 'imperial') => {
	if (units === 'imperial') {
		return `${temp.toFixed()}\xB0F`;
	} else {
		return `${temp.toFixed()}\xB0C`;
	}
};
