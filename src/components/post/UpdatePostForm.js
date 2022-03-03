import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";
import Alert from "../layout/Alert";

const UpdatePostForm = () => {
	const {
		postState: { post },
		updatePostForm,
		setUpdatePostForm,
		updatePost,
	} = useContext(PostContext);

	const [formValue, setFormValue] = useState(post);

	useEffect(() => setFormValue(post), [post]);

	const [alert, setAlert] = useState(null);

	const { title, des } = formValue;

	const handleInputChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await updatePost(formValue);
			if (response.success)
				setAlert({ type: "success", message: response.message });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2>Sua post</h2>
			<Alert info={alert} />
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					name="title"
					placeholder="title"
					value={title}
					onChange={handleInputChange}
					require
				></input>
				<input
					type="text"
					name="des"
					placeholder="des"
					value={des}
					onChange={handleInputChange}
					require
				></input>
				<button type="submit" className="btn btn-">
					Sua
				</button>
			</form>
			<button onClick={() => setUpdatePostForm(false)}>Dong</button>
		</>
	);
};

export default UpdatePostForm;
