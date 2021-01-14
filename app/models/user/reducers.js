import { GET_ALL_USER_INFO_REQUEST_SUCCESS } from "./actions";

const initialState = {
	id: 'id0',
	name: 'demo',
	email: 'demo@mail.com',
	accessToken: null
};

const init = []

const reducer = (state = init, action) => {
	switch(action.type) {
		case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
			// const { id, name, email } = action.payload;
			// return {
			// 	id,
			// 	name,
			// 	email,
			// }

			const allPosts = action.payload.posts;
			return allPosts
		}
		default:
			return state
	}
};

export { reducer };