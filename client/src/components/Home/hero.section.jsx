import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	top: 0;
    margin: 0;
    width: 100%;
	display: flex;
	position: relative;
	height: 250px;
	justify-content: center;
	align-items: center;

	div {
		position: absolute;
		text-align: center;
		font-family: 'Questrial', sans-serif;
		line-height: 0.8;
		font-size: 40px;
		background-color: rgba(255, 255, 255, 0.82);
		padding: 23px 10px;
	}
`;

const HeroSection = () => {
	return (
		<Container>
			<img style= {{height: '100%'}}
				src={'https://www.uri.edu/programs/wp-content/uploads/programs/sites/3/2014/04/feat_img_comp_sci.jpg'}
				alt="img"
			/>
			<div>
				SAMPLE<br />TEXT
			</div>
		</Container>
	);
};

export default HeroSection;
