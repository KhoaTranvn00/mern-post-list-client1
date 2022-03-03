import React, { useContext, useState } from "react";
import { PostContext } from "../../context/PostContext";
import Alert from "../layout/Alert";

const AddPost = () => {
	const [formValue, setFormValue] = useState({
		title: "",
		des: "",
	});

	const [alert, setAlert] = useState(null);

	const { title, des } = formValue;

	const { setAddPostForm, addPost } = useContext(PostContext);

	const handleInputChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await addPost(formValue);
			if (response.success)
				setAlert({ type: "success", message: response.message });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2>Them post</h2>
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
					Them
				</button>
			</form>
			<button onClick={() => setAddPostForm(false)}>Dong</button>
		</>
	);
};

export default AddPost;
