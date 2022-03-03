import React from "react";

const Alert = ({ info }) => {
	return info === null ? null : <h2>{info.message}</h2>;
};

export default Alert;
