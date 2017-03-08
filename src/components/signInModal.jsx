// Sign In Modal Component - signInModal.jsx
import React from "react";
import "./modal.css";

export default () => {
	return(
		<div id="signInModal" className="modal">
			<div className="modal-content">
			<h4>Sign-In</h4>
				<form className="col s12">
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
				</form>
				{modalFooter}
			</div>
		</div>
					);
					}
