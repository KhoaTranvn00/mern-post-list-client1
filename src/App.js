import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./action/counter";

const App = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const [value, setValue] = useState(0);

	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<h1>Khoa1</h1>
			<h1>{counter}</h1>
			<input type="number" value={value} onChange={handleValueChange}></input>
			<button onClick={() => dispatch(increase(value))}>in</button>
			<button onClick={() => dispatch(decrease(value))}>de</button>
		</div>
	);
};

export default App;
