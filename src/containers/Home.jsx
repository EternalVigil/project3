import React, { Component } from 'react';
import { mainHero } from 'react-router';
import { header } from 'react-router';
import { footer } from 'react-router';

class Home extends Component {
	render(){
		return(
				<div>
				came from Home.jsx
				{header}
				{mainHero}
				{footer}
				</div>
			);
	}
}

export default Home;