import React from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
	return (
		<div>
			<h1>BookKeeper</h1>
			<nav>
				<ul>
					<li>
						<Link to="web">web </Link>
					</li>
					<li>
						<Link to="contact">contact</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
