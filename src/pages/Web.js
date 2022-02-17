import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { webs } from "../data/webs";

const Web = () => {
	const params = useParams();
	const { id } = params;

	const navigate = useNavigate();

	const web = webs.find((web) => web.id == id);

	useEffect(() => {
		if (!web) {
			navigate("..");
		}
	}, [web]);

	return <div>{web ? ` id ${web.id}: ${web.name}` : "Not found web"}</div>;
};

export default Web;
