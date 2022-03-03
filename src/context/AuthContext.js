import { useEffect, useReducer } from "react";
import { createContext } from "react";
import axios from "axios";

import authReducer from "../reducer/authReducer";
import { apiURL, LOCAL_STORAGE_TOKEN_NAME } from "./constant";
import setAuthToken from "../utils/setAuthToken";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		isAuthLoading: true,
		isAuthenticated: false,
		user: null,
	});

	const loadUser = async () => {
		if (localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME)) {
			setAuthToken(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
		}

		try {
			const response = await axios.get(`${apiURL}/user`);
			if (response.data.success) {
				dispatch({
					type: "SET_AUTH",
					payload: { isAuthenticated: true, user: response.data.user },
				});
			}
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
			setAuthToken(null);
			dispatch({
				type: "SET_AUTH",
				payload: { isAuthenticated: false, user: null },
			});
		}
	};

	const loginUser = async (formValue) => {
		try {
			const respond = await axios.post(`${apiURL}/user/login`, formValue);
			if (respond.data.success) {
				localStorage.setItem("post-token", respond.data.accessToken);
			}
			await loadUser();
			return respond.data;
		} catch (error) {
			if (error.response.data) return error.response.data;
			else return { success: false, message: error.message };
		}
	};

	const registerUser = async (formValue) => {
		try {
			const respond = await axios.post(`${apiURL}/user/register`, formValue);
			if (respond.data.success) {
				localStorage.setItem("post-token", respond.data.accessToken);
			}
			await loadUser();
			return respond.data;
		} catch (error) {
			if (error.response.data) return error.response.data;
			else return { success: false, message: error.message };
		}
	};

	const logoutUser = () => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
		dispatch({
			type: "SET_AUTH",
			payload: {
				isAuthenticated: false,
				user: null,
			},
		});
	};

	useEffect(() => loadUser(), []);

	const authContextData = {
		loginUser,
		registerUser,
		logoutUser,
		authState,
	};

	return (
		<AuthContext.Provider value={authContextData}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };
export default AuthContextProvider;
