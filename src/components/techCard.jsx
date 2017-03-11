import React, { Component, PropTypes } from 'react';

class techCard extends Component {
	render() {
		return(
			<div>
			<h1>{this.props.techImageLink}</h1>
			<h2>{this.props.techName}</h2>
			<h3>{this.props.techDescription}</h3>
			<h4>{this.props.techDocLink}</h4>
			</div>
			);
	}
}

techCard.propTypes = {
techImageLink: PropTypes.string.required,
techName: PropTypes.string.required,
techDescription: PropTypes.string.required,
techDocLink: PropTypes.string.required
}

export default techCard;