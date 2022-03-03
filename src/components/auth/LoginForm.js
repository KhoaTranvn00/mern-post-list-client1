import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../layout/Alert";

const LoginForm = () => {
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
	});

	const [alert, setAlert] = useState(null);

	const navigate = useNavigate();

	const { loginUser } = useContext(AuthContext);

	const { username, password } = formValue;

	const handleInputChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
		setAlert(null);
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		try {
			const loginData = await loginUser(formValue);
			if (loginData.success) {
				navigate("/dashboard");
			} else setAlert({ type: "danger", message: loginData.message });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Alert info={alert} />
			<form onSubmit={handleOnSubmit}>
				<input
					type="text"
					placeholder="username"
					name="username"
					value={username}
					onChange={handleInputChange}
				></input>
				<input
					type="password"
					placeholder="password"
					name="password"
					value={password}
					onChange={handleInputChange}
				></input>
				<button type="submit">Dang nhap</button>
			</form>

			<span>
				ban chua co tai khoan
				<Link to="../register"> click here</Link>
			</span>
		</div>
	);
};

export default LoginForm;
