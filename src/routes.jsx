import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './containers/Home';
/*
import Chat from './containers/Chat';
import LeaderBoard from './containers/LeaderBoard';
import Generator from './containers/Generator';
import About from './containers/About';
*/


export default () => {
	return(
		<Route path='/' component={Home}>
		<IndexRoute component={Home} />
		{/*
		<Route path='/chat' component={Chat} />
		<Route path='/leaderboard' component={LeaderBoard} />
		<Route path='/generator' component={Generator} />
		<Route path='/about' component={About} />
	*/}
		</Route>;
		);
 