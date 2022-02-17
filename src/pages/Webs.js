import React from "react";
import { Link, Outlet } from "react-router-dom";
const { webs } = require("../data/webs");

const Webs = () => {
	return (
		<div>
			Web
			<nav>
				<ul>
					{webs.map((web) => (
						<li key={web.id}>
							<Link to={web.id.toString()}>{web.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Webs;
