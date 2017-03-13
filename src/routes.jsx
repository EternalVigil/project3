import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
/*
import Chat from './containers/Chat';
import LeaderBoard from './containers/LeaderBoard';
import Generator from './containers/Generator';
import About from './containers/About';
*/


export default () => {
	return(
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
		</Route>
		);
 };