export const formatTemp = (temp: number, units: string) => {
	if (units === 'imperial') {
		return `${temp.toFixed()}\xB0F`;
	} else {
		return `${temp.toFixed()}\xB0C`;
	}
};
