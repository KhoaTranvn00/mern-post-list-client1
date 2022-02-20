const counterReducer = (state = 3, action) => {
	const { type, payload } = action;
	switch (type) {
		case "increase":
			return state + +payload;
		case "decrease":
			return state - +payload;

		default:
			return state;
	}
};

export default counterReducer;
