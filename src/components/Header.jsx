import React from 'react';
import { Link } from 'react-router';

export default () => {
	return(
		<nav className='header nav'>
		Placeholder for header navbar
			<ul className='headerLinks'>
				<li><Link to='/about'>About</Link></li>
			</ul>
		</nav>
		);
}