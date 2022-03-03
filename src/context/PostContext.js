import axios from "axios";
import { createContext, useReducer, useState } from "react";
import postReducer from "../reducer/postReducer";
import { apiURL } from "./constant";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
	const [postState, dispatch] = useReducer(postReducer, {
		post: null,
		posts: [],
		isPostLoading: false,
	});

	const [addPostForm, setAddPostForm] = useState(false);
	const [updatePostForm, setUpdatePostForm] = useState(false);

	const getPosts = async () => {
		try {
			const response = await axios.get(`${apiURL}/post`);
			dispatch({ type: "POST_LOADED_SUCCESS", payload: response.data.posts });
		} catch (error) {
			dispatch({ type: "POST_LOADED_FAILURE" });
		}
	};

	const addPost = async (formValue) => {
		try {
			const response = await axios.post(`${apiURL}/post/add`, formValue);
			if (response.data.success) {
				dispatch({ type: "ADD_POST", payload: response.data.newPost });
			}
			return response.data;
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, error: "server error" };
		}
	};

	const deletePost = async (id) => {
		try {
			const response = await axios.delete(`${apiURL}/post/${id}`);
			if (response.data.success) {
				dispatch({ type: "DELETE_POST", payload: id });
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, error: "server error" };
		}
	};

	const findPost = (postId) => {
		const post = postState.posts.find((post) => post._id === postId);
		dispatch({ type: "FIND_POST", payload: post });
	};

	const updatePost = async (post) => {
		try {
			const response = await axios.put(`${apiURL}/post/${post._id}`, post);
			if (response.data.success) {
				dispatch({ type: "UPDATE_POST", payload: response.data.post });
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: "server error" };
		}
	};

	const postContextData = {
		postState,
		getPosts,
		addPostForm,
		setAddPostForm,
		updatePostForm,
		setUpdatePostForm,
		addPost,
		deletePost,
		findPost,
		updatePost,
	};

	return (
		<PostContext.Provider value={postContextData}>
			{children}
		</PostContext.Provider>
	);
};

export default PostContextProvider;
