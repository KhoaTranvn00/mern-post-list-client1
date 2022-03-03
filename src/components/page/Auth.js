import React, { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Auth = () => {
	const {
		authState: { isAuthenticated, isAuthLoading },
	} = useContext(AuthContext);

	const navigate = useNavigate();

	if (isAuthLoading) {
		return <div>Loading...</div>;
	} else if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	} else
		return (
			<div>
				<h1>Auth</h1>
				<Outlet />
			</div>
		);
};

export default Auth;
