export default function removeYear(date: number): string {
	const dateArray: string[] = new Date(date * 1000).toDateString().split(' ');
	dateArray.pop();
	return dateArray.join(' ');
}
