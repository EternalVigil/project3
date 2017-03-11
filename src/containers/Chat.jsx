import React, { Component } from 'react';
import io from ('socket.io')(80);

class Chat extends Component{
	render(){
		return(
			<div className='chatroom'>
			Placeholder for chatroom
			</div>
			);
	}
}

export default Chat;