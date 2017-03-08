// Main Dashboard Hero - mainHero.jsx
import React from "react";
import "./dashboard.css";

export default () => {
	return(
		<main>
			<div id="index-banner" className="section no-pad-bot">
				<div className="container">
					<div className="row">
					<!-- SPACER -->
					</div>
					<div className="card">
						<div className="row">
						</div>
						<div className="header center red-text">
						<span>CODE</span><span>SPIRATION</span>
						</div>
						<h1 className="header center red-text">Idea Generator</h1>
						<div className="row center">
							<h5 className="header col s12 light">
							Need some inspiration for your next coding project?<br>
								<b>Well, Let's get pickin'!</b>
							</h5>
						</div>
							
					<div className="row"></div>
								
						<div className="row center">
							<a href="#" type="submit" name="action" className="btn-large waves-effect waves-light red">eenie meenie miney mo!</a>	
						</div>
							
					<div className="row"></div>
					<div className="row"></div>

					</div>
				</div>
			</div>
</main>
	);
}