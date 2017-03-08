import React, { Component } from "react";
import ideaCard from "../components/ideaCard";

//Import ideaCard data from Mongo database table ideas
const IDEA_CARDS = [];

class dashLeftColumn extends Component{
	render(){
		return(
			<div>
				
				<ideaCard
					cardHeader
					cardDescription
					cardLink
				 />
			</div>
			);
	}
}

export default dashLeftColumn;