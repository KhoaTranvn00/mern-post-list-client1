const authReducer = (state, action) => {
	const {
		type,
		payload: { isAuthenticated, user },
	} = action;

	switch (type) {
		case "SET_AUTH":
			return {
				...state,
				isAuthLoading: false,
				isAuthenticated,
				user,
			};

		default:
			return state;
	}
};

export default authReducer;
