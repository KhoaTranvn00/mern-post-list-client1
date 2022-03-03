import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";

const SinglePost = ({
	post: {
		_id,
		title,
		des,
		userId: { username },
	},
}) => {
	const { deletePost, findPost, setUpdatePostForm } = useContext(PostContext);

	const handleUpdatePost = (id) => {
		findPost(id);
		setUpdatePostForm(true);
	};

	return (
		<div style={{ border: "2px solid black", margin: "10px" }}>
			<h4>{title}</h4>
			<p>{des}</p>
			<button onClick={() => handleUpdatePost(_id)}>sua</button>
			<button onClick={() => deletePost(_id)}>xoa</button>
		</div>
	);
};

export default SinglePost;
