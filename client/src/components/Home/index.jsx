import React from 'react';
import styled from 'styled-components';
import HeroComponent from './hero.section';
import ScrollContainer from '../Shared/ScrollContainer'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: fit-content;
`;

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<ScrollContainer bg="#F8AD18" title="Learn more" />
			<ScrollContainer bg="#e06662" title="Success stories" />
			<ScrollContainer bg="#62e0b4" title="Featured Articles" />
			<ScrollContainer bg="#62cde0" title="Resources" />
		</div>
	);
};

export default Home;
