// Dashboard Right Column - dashRightColumn.jsx
import React from "react";
import "./dashboard.css";

export default () => {
	return(
	<div className="col m6">
			<h4 className="grey-text text-darken-4"><span>Notifications</span></h4>
			<ul className="collapsible" data-collapsible="accordion">
			<li>
				<div className="collapsible-header">
				<span className="new badge red">4</span>
					<i className="material-icons">filter_drama</i>
					First
				</div>
				<div className="collapsible-body">
				<p>Lorem ipsum dolor sit amet.</p>
				</div>
				</li>
			</ul>
		<div className="row"> Spacer - to be deleted </div>
		
		<h4 className="grey-text text-darken-4"><span>Languages</span></h4>
		<div className="card horizontal hoverable">
			<div className="card-image">
				<img src="images/html.png" alt="HTML Web Language" />
			</div>
			<div className="card-stacked">
				<div className="card-content">
				<p>Hyper Text Markup Language</p>
				</div>
				<div className="card-action">
					<a className="red-text" href="">Learn More</a>
				</div>
			</div>
		</div>
	</div>
);
	}
