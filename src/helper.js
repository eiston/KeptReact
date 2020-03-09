/* eslint-disable prettier/prettier */
export const compareTime = (time1, time2) => {
	const [ t1h, t1m, t1s ] = time1.split(':');
	const [ t2h, t2m, t2s ] = time2.split(':');
	const t1 = parseInt(t1h) * 3600 + parseInt(t1m) * 60 + parseInt(t1s);
	const t2 = parseInt(t2h) * 3600 + parseInt(t2m) * 60 + parseInt(t2s);

	return t2 > t1;
}