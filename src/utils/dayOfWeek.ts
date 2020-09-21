const dayOfWeek = (day: number) => {
	let stringDay: string;
	switch (day) {
		case 0:
			stringDay = 'Sunday';
			break;
		case 1:
			stringDay = 'Monday';
			break;
		case 2:
			stringDay = 'Tuesday';
			break;
		case 3:
			stringDay = 'Wednesday';
			break;
		case 4:
			stringDay = 'Thursday';
			break;
		case 5:
			stringDay = 'Friday';
			break;
		case 6:
			stringDay = 'Saturday';
			break;
		default:
			stringDay = 'unknown';
	}
	return stringDay;
};

export default dayOfWeek;
