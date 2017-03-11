import React, { Component } from 'react';
import { mainHero } from 'react-router';
import { header } from 'react-router';
import { footer } from 'react-router';

class Home extends Component {
	render(){
		return(
				{header}
				{mainHero}
				{footer}
			);
	}
}

export default Home;