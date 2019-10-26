import React, {useEffect} from 'react';
import STYLES from './App.css';
// import { RouteConfig } from './routes';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'
import {firestore} from './config/firebase.init'
import Event from "./components/Event";
import Home from './components/Home/hero.section'
import NavBar from './components/Shared/NavBar' 

const Main = styled.section`
  display: block;
  padding-top: 61px;
  width: 100%;
`;

const App = () => {

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
      <NavBar/>
      <Home></Home>


      <Event
        title="Event 1"
        location="Glasgow"
        date="27 Oct"
        imgSrc="http://via.placeholder.com/150"
      />
      <br />
      <Event
        title="Event 2"
        location="Glasgow"
        date="28 Oct"
        imgSrc="http://via.placeholder.com/150"
      />
      </div>
      
      {articles.forEach(a => console.log(a))}

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
