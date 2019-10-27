import React, { useEffect } from 'react';
import STYLES from './App.css';
// import { RouteConfig } from './routes';

import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { firestore } from './config/firebase.init';
import Home from './components/Home/index';
import NavBar from './components/Shared/NavBar';
import ScrollContainer from './components/Shared/ScrollContainer';
import Event from './components/Event';
import Article from './components/Article'
import {RouteConfig} from './routes/'


const Main = styled.section`
	display: block;
	padding-top: 61px;
	width: 100%;
`;

const App = () => {
	return (
		<Router>
			<NavBar />
      <RouteConfig/>
		</Router>
	);

};

export default App;
