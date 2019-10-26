import React from 'react'
import styled from 'styled-components'
import Carousel from './carousel.section'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;


const Home = () => {

    return (
        <Carousel/>
    )

}

export default Home

