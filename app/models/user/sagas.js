import { call, put, takeEvery } from "redux-saga/effects";

import { 
	GET_ALL_USER_INFO_REQUEST, 
	GET_ALL_USER_INFO_REQUEST_SUCCESS 
} from "./actions";
import { queryApi } from '../query-api';

function* handler () {
	yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
	console.log(action)
	try {
		const posts = yield call(queryApi, {
			endpoint: '',
			method: 'GET',
		});
		// console.log(posts);
		
		yield put({
			type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
			payload: {
				// id: posts[0].id,
				// name: posts[0].title,
				// email: 'anshulborawake@gmail.com'
				posts
			}
		});
	} catch(err) {
		console.log(err)
	}
}

export { handler };