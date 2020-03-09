/* eslint-disable prettier/prettier */
'user strict';

import { COMPLETE_POSTINGS } from '../constants'; 

export default function jobPostingReducer(state = '', action) {
	switch (action.type) {
		case COMPLETE_POSTINGS: 
			return {
				postingList: action.postingList,
				page: 1,
				detailOpen: false,
			}
	}

	return state;
}