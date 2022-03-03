import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../context/constant";

const Navbar = () => {
	const {
		authState: { user },
		logoutUser,
	} = useContext(AuthContext);

	const handleLogout = () => {
		logoutUser();
	};

	return (
		<div>
			<ul>
				<li>Welcome {user.username}</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
