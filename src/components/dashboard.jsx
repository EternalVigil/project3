// Main Dashboard - dashboard.jsx
import React from "react";
import "./dashboard.css";

export default () => {
	return(
		<main>
			<div className="row">
				<div className="container">
				{dashLeftColumn}
				{dashRightColumn}
				</div>
			</div>
		</main>
	);
	}
