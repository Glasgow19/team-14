import styled from "styled-components";
import React from "react";
import { slide as Menu } from "react-burger-menu";

var styles = {

	bmBurgerButton: {
		position: 'fixed',
		width: '18px',
		height: '18px',
		right: '18px',
		top: '18px'
	},
	bmBurgerBars: {
		background: '#fff'
	},
	bmBurgerBarsHover: {
		background: '#a90000'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%'
	},
	bmMenu: {
		background: '#FFF',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em'
	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em'
	},

	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}
};

const NavBar = (props) => {
	console.log('test');
	return (
		// <p style= {{marginTop:0}}>test</p>
		<div>
			<Menu right styles={styles}>
				<div id="home" className="menu-item">
					<a href="/">Home</a>
					<br />
				</div>
				<div id="info" className="menu-item">
					<a href="/info">More Info</a>
					<br />
				</div>
				<div id="story" className="menu-item">
					<a href="/story">Success stories</a>
					<br />
				</div>
				<div id="articles" className="menu-item">
					<a href="/articles">Read articles</a>
					<br />
				</div>
			</Menu>
		</div>
	);

};

export default NavBar;
