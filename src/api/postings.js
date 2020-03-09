/* eslint-disable prettier/prettier */
import axios from 'axios';

import { BASE_URL } from '../config';

module.exports = {
	getPostings: async (provider_id) => {
		const getURL = `${BASE_URL}postings/search?author_id=${provider_id}`;
		let { data } = await axios.get(getURL);
		return data;
	},

	getDetails: async (postId) => {
		const getURL = `${BASE_URL}postings/${postId}/details`;
		let res = await axios.get(getURL);
		return res;
	},

	createPosting: async (postObject) => {
		const postURL = `${BASE_URL}postings/create`;
		let res = await axios.post(postURL, postObject);

		console.log(res);

		return res;
	}
}
