// Idea Generator Modal - ideaGeneratorModal.jsx
import React from "react";
import "./modal.css";

export default () => {
	return(
		<div id="generatorModal" className="modal">
			<div className="modal-content">
				<h5 className="red-text">The Coding Lords Have Spoken!</h5>
				<p>Go forth and code me: {ideaName} in {ideaLanguages}</p>
			</div>
			<div className="modal-footer">
				<a className="modal-action modal-close waves-effect waves-red btn-flat" href="#!">Accept</a>
					<a className="modal-action modal-close waves-effect waves-red btn-flat" href="#!">No Thanks
</a>
			</div>
		</div>
	);
}