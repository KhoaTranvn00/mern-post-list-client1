import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PostContext } from "../../context/PostContext";
import AddPost from "../post/AddPostForm";
import SinglePost from "../post/SinglePost";
import UpdatePostForm from "../post/UpdatePostForm";

const Dashboard = () => {
	const {
		postState: { posts, isPostLoading },
		getPosts,
		addPostForm,
		setAddPostForm,
		updatePostForm,
		setUpdatePostForm,
	} = useContext(PostContext);

	const {
		authState: {
			user: { username },
		},
	} = useContext(AuthContext);

	useEffect(() => getPosts(), []);

	let body = null;

	if (isPostLoading) body = <h1>Loading post...</h1>;
	else if (posts.length === 0)
		body = (
			<p>
				chao {username} ban chua co post nao{" "}
				<button onClick={() => setAddPostForm(true)}>
					{" "}
					bam vao day de them post
				</button>{" "}
			</p>
		);
	else
		body = (
			<>
				<button onClick={() => setAddPostForm(true)}>Them post</button>
				{posts.map((post) => (
					<SinglePost post={post} />
				))}
			</>
		);

	return (
		<>
			{addPostForm && <AddPost />}
			{updatePostForm && <UpdatePostForm />}
			{body}
		</>
	);
};

export default Dashboard;
