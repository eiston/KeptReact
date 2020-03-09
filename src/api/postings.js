/* eslint-disable prettier/prettier */
import axios from 'axios';

import { BASE_URL } from '../config';

module.exports = {
	getPostings: async (provider_id) => {
		console.log('in api');
		const getURL = `${BASE_URL}postings/search?author_id=${provider_id}`;
		let { data } = await axios.get(getURL);
		return data;
	}
}