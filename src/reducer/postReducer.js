const postReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "POST_LOADED_SUCCESS":
			return {
				...state,
				posts: payload,
				isPostLoading: false,
			};

		case "POST_LOADED_FAILURE":
			return {
				...state,
				isPostLoading: false,
				posts: [],
			};

		case "ADD_POST":
			return {
				...state,
				isPostLoading: false,
				posts: [...state.posts, payload],
			};

		case "DELETE_POST":
			return {
				...state,
				isPostLoading: false,
				posts: state.posts.filter((post) => post._id !== payload),
			};

		case "FIND_POST":
			return { ...state, post: payload };

		case "UPDATE_POST":
			const newPosts = state.posts.map((post) =>
				post._id === payload._id ? payload : post
			);
			return { ...state, posts: newPosts };

		default:
			return state;
	}
};

export default postReducer;
