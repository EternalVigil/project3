// Dashboard Left Column Component - dashLeftColumn.jsx
import React, { Component, PropTypes } from "react";
import "./dashboard.css";

class ideaCard extends Component {
	render(){
		return(
			<div className="col m6">
				<h4 className="grey-text text-darken-4"><span>Ideas</span></h4>
					<div id="ideaCard" className="card horizontal hoverable">
						<div className="card-stacked">
							<div className="card-content">
								<p className="header">{this.props.cardTitle}</p>
								<p>{this.props.cardDescription}</p>
							</div>
							<div className="card-action">
								<a href="{cardLink}" className="red-text">This is a link.</a>
							</div>
					</div>
				</div>
			</div>
			);
	}
}

ideaCard.propTypes = {
	cardTitle: PropTypes.string.required,
	cardDescription: PropTypes.string.required,
	cardLink: PropTypes.string
}

export default ideaCard;