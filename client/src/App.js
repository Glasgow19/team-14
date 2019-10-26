<<<<<<< HEAD
import React from "react";
import STYLES from "./App.css";
// import { RouteConfig } from './routes';
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
// import AlternatingComponent from "./components/AlternatingComponent";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import React, {useEffect} from 'react';
import STYLES from './App.css';
// import { RouteConfig } from './routes';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'
import {firestore} from './config/firebase.init'
>>>>>>> d353958daa760c31fc43dc983e5a4af91545d4a0

const Main = styled.section`
  display: block;
  padding-top: 61px;
  width: 100%;
`;

const App = () => {
<<<<<<< HEAD
  return (
    <div>
      {/* <AlternatingComponent
        title="Article 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imgSrc="http://via.placeholder.com/150"
        imgPosition="right"
      />
      <br />
      <AlternatingComponent
        title="Article 2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imgSrc="http://via.placeholder.com/150"
        imgPosition="left"
      /> */}

=======

  const articles = []

  useEffect(() => {
    firestore.collection('articles').get().then((data) => data.forEach(doc => {
      console.log(doc.data()) 
    }))
    return () => {
      
    };
  }, [])

	return (
    <div>
      

      {articles.forEach(a => console.log(a))}

>>>>>>> d353958daa760c31fc43dc983e5a4af91545d4a0
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
