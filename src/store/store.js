/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobPostingReducer from '../reducers/JobPostingReducer';

const rootReducer = combineReducers({
	jobPosting: jobPostingReducer
});

export default createStore(rootReducer,
	applyMiddleware(thunk)
);
