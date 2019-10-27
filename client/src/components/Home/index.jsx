import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import HeroComponent from './hero.section';
import ScrollContainer from '../Shared/ScrollContainer'
import {firestore} from '../../config/firebase.init'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: fit-content;
`;

const Home = () => {
	const [articleArray, setArticleArray] = useState([]);
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		firestore
		  .collection("articles")
		  .get()
		  .then(function(articles) {
			const arr = [];
			articles.forEach(article => {
			  article = article.data();
				if (article.featured) {
					console.log("Found featured article!!")
					arr.push({
						featured: true,
						title: article.title,
						text: article.text,
						date: article.date,
						imgSrc: article.imageUrl,
						backgroundColour: "purple"
					  });
				}	
				
			});
			setArticleArray(arr);
			console.log("Entire arr:", arr)
		  })
		  .then(() => {
			console.log("Error array empty!!", articleArray);
			setLoading(false);
		  });
		return () => {};
	  }, []);

	return (
		<div>
			<HeroComponent />
			<ScrollContainer bg="#F8AD18" title="Learn more" />
			<ScrollContainer bg="#62cde0" title="Facts" />
			<ScrollContainer bg="#e06662" title="Success stories" />
			<ScrollContainer bg="#62e0b4" arr={articleArray} title="Featured Articles" />
			<ScrollContainer bg="#62cde0" title="Resources" />
			
		</div>
	);
};

export default Home;
