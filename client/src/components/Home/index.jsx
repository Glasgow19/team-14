import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeroComponent from '../Shared/hero.section';
import ScrollContainer from '../Shared/ScrollContainer';
import { firestore } from '../../config/firebase.init';
import { Container } from '@material-ui/core'

// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	height: fit-content;
// `;


const image =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vfwiFzWrPiiene-4DbUaFAHaE8%26pid%3DApi&f=1";

const tileData = [
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  }
];

const Home = () => {
  const [articleArray, setArticleArray] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firestore
      .collection("articles")
      .get()
      .then(function(articles) {
        const arr = [];
        articles.forEach(article => {
          article = article.data();
          if (article.featured) {
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
      })
      .then(() => {
        setLoading(false);
      });
    return () => {};
  }, []);

	return (
		<Container>
            <HeroComponent img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdisruptionmag.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fgirls-who-code-3.jpg&f=1&nofb=1" />
			<ScrollContainer bg="#F8AD18" arr={tileData} link={"/info"} title="Learn more" />
			<ScrollContainer bg="#62cde0" arr={tileData} link={"/facts"} title="Facts" />
      <ScrollContainer bg="#e06662" arr={tileData} link={"/title"} ="Success stories" />
			<ScrollContainer bg="#62e0b4" arr={tileData} link={"/stories"} title="Featured Articles" />
			<ScrollContainer bg="#62cde0" arr={tileData} link={"/resources"}title="Resources" />
        </Container>
			
		
	);

};

export default Home;
