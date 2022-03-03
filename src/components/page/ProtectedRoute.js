import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import Navbar from "../layout/Navbar";

const ProtectedRoute = () => {
	const {
		authState: { isAuthenticated, isAuthLoading },
	} = useContext(AuthContext);

	if (isAuthLoading) {
		return <h1>Loading protected route...</h1>;
	}
	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default ProtectedRoute;
