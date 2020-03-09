/* eslint-disable prettier/prettier */
import { COMPLETE_POSTINGS } from '../constants';
import postings from '../api/postings';
import axios from 'axios';
import { BASE_URL } from '../config';

export const completePosting = async (providerId) => {
	console.log('in then');
	let data = await postings.getPostings(providerId);
	console.log(data);
	return {
		postingList: data,
		type: COMPLETE_POSTINGS
	}
	// async (dispatch) => {
	// 	console.log('in action');
	// 	let data = await postings.getPostings(providerId);
	// 	return dispatch({
	// 		postingList: data,
	// 		type: COMPLETE_POSTINGS
	// 	});
	// }
}