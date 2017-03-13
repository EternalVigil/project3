// Dashboard Left Column Component - dashLeftColumn.jsx
import React, { Component, PropTypes } from "react";
import "./dashboard.css";

class ideaCard extends Component {
	render(){
		return(
			{this.props.cardTitle}
			{this.props.cardDescription}
			{this.props.cardLink}
			);
	}
}

ideaCard.propTypes = {
	cardTitle: PropTypes.string.required,
	cardDescription: PropTypes.string.required,
	cardLink: PropTypes.string
}

export default ideaCard;