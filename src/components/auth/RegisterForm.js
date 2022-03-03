import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../layout/Alert";

const RegisterForm = () => {
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const [alert, setAlert] = useState(null);

	const { username, password, confirmPassword } = formValue;

	const { registerUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword)
			return setAlert({ info: "danger", message: "password not match" });
		try {
			const response = await registerUser(formValue);
			if (response.success) return navigate("/dashboard");
			else setAlert({ type: "danger", message: response.message });
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
				<input
					type="password"
					placeholder="confirmPassword"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleInputChange}
				></input>
				<button type="submit">Đang ki</button>
			</form>

			<span>
				ban da co tai khoan
				<Link to="../login"> click here</Link>
			</span>
		</div>
	);
};

export default RegisterForm;
