import React from "react";
import { useState } from "react";
function App() {
	const [counter, setCounter] = useState(0);

	const handleOnClick = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>USE STATE</h1>
			<h1>{counter}</h1>
			<button onClick={handleOnClick}>click me!</button>
		</div>
	);
}

export default App;
