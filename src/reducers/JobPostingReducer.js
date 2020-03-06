/* eslint-disable prettier/prettier */
'user strict';

import { LOADING_DETAIL, DETAIL_COMPLETE } from '../constants'; 

const initial = {
  open: false,
  loading: false
};

export default function jobPostingReducer(state = initial, action) {
	switch (action.type) {
		case LOADING_DETAIL: 
			return {
				...state,
				detail_open: false,
			}
		case DETAIL_COMPLETE:
			return {
				...state,
				detail_open: true,
				detail_data: action.postings
			}
	}

	return state;
}