import React from 'react';
import STYLES from './App.css';
// import { RouteConfig } from './routes';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/index'

const Main = styled.section`
	display: block;
	padding-top: 61px;
	width: 100%;
`;

const App = () => {
	return (
    <div>

      <Home/>

      {/* <Router> '/}
			<div className={'App'}>
				<Main>
					<RouteConfig />
				</Main>
			</div>
		{/* </Router> */}
    </div>
		
	);
};

export default App;
