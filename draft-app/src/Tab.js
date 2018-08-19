import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './Tab.css'

class Tab extends Component {

	constructor(props) {
		super(props);
		this.state = {
			address: this.props.address,
			name: this.props.name,
		};
	}

	render() {
		return(
			<NavLink exact className="Tab" activeClassName="Tab-active" to={this.state.address}>
				<button disabled={this.state.address===window.location.pathname ? true : false} className="Tab-btn">
					{this.state.name}
				</button>
			</NavLink>
		);
	}
}

export default Tab