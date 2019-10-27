import React, { useEffect } from "react";
import STYLES from "./App.css";
// import { RouteConfig } from './routes';
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { firestore } from "./config/firebase.init";
import SimpleTabs from "./components/Admin/admin";

const Main = styled.section`
  display: block;
  padding-top: 61px;
  width: 100%;
`;

const App = () => {
  const articles = [];

  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then(data =>
        data.forEach(doc => {
          console.log(doc.data());
        })
      );
    return () => {};
  }, []);

  return (
    <div>
      <SimpleTabs />

      {articles.forEach(a => console.log(a))}

      {/* <Router> '/}
			<div className={'App'}>
				<Main>
					<NavBar />
          {/* <Backbutton/> */}
					<RouteConfig />
          <PageTitle title="Home" />
          <Footer />
				</Main>
			</div>
		{/* </Router> */}
    </div>
  );
};

export default App;
