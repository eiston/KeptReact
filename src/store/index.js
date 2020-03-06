/* eslint-disable prettier/prettier */
import { createStore, combineReducers } from 'redux';
import jobPostingReducer from '../reducers/JobPostingReducer';

const rootReducer = combineReducers({
	jobPosting: jobPostingReducer
});

// const store = () => 

export default createStore(rootReducer);
