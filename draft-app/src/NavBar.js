import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tab from './Tab'
import './NavBar.css'

class NavBar extends Component {

	render() {
		return (
			<Router>
				<div className="NavBar">
					<Tab address="/home" name="New"/>
					<Tab address="/old" name="Old"/>
					<Tab address="/css" name="CSS"/>
					<Tab address="/final" name="FINAL"/>
				</div>
			</Router>
		);
	}
}

export default NavBar;