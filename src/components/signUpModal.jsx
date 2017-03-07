// Sign Up Modal Component - signUpModal.jsx
import React from "react";
import "./modal.css";

export default () =>{
	return(
		<div id="signUpModal" className="modal">
			<div className="modal-content">
		<h4>Sign Up</h4>
				<form className="col s12">
					<div className="row">
							<div className="input-field col s6">
								<input id="name" type="text" className="validate"></input>
								<label for="name">Name</label>
							</div>
							<div className="input-field col s6">
							<input id="email" type="email" className="validate"></input>
								<label for="email">Email</label>
							</div>
					</div>
					<div className="row">
							<div className="input-field col s6">
							<input id="username" type="text" className="validate"></input>
								<label for="username">User Name</label>
							</div>
							<div className="input-field col s6">
							<input id="password" type="text" className="validate"></input>
								<label for="password">Password</label>
							</div>
					</div>
			<div className="chips chips-initial"></div>

				</form>
			{modalFooter}
			</div>
		</div>
	);
}