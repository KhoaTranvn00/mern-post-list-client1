import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Langding = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/account/login");
	}, []);
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Langding;
