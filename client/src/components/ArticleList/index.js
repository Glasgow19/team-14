import React, { useEffect, useState } from 'react';
import { firestore } from '../../config/firebase.init';
import AlternatingComponent from './../AlternatingComponent';
import PaperComponent from '../Shared/PaperComponent';
import styled from 'styled-components'

const ArticleContainer = styled.div`
	background-color: #74529e;
	display: block;
	margin: auto;
	padding: 20px;
	position: relative;
`;

const ArticleList = () => {
	const [ loading, setLoading ] = useState(true);
	const [ articleArray, setArticleArray ] = useState([]);

	useEffect(() => {
		firestore
			.collection('articles')
			.get()
			.then(function(articles) {
				const arr = [];
				articles.forEach((article) => {
					article = article.data();
					const articleDate = article.date;
					const articleImageUrl = article.imgSrc;
					const articleText = article.text;
					const articleTitle = article.title;

					arr.push({
						title: articleTitle,
						text: articleText,
						date: articleDate,
						imgSrc: articleImageUrl
					});
				});
				setArticleArray(arr);
			})
			.then(() => {
				setLoading(false);
			});
		return () => {};
	}, []);

	return (
		<div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#74529e'}}>
			{loading && <p>Loading</p>}
			{!loading && (
				<ArticleContainer>
					{articleArray.map((article, index) => (
						<PaperComponent title={article.title} img={article.imgSrc} text={article.text} />
					))}
				</ArticleContainer>
			)}
		</div>
	);
};

export default ArticleList;
