import React from 'react'
import styled from 'styled-components'
import NavBar from '../NavBar/navBar';
import Indicators from './InforBars/indicators'
import Map from './map'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const Main = () => {
  return (
    <Container>
      <NavBar/>
      <Indicators/>
      <Map/>      
    </Container>);
}


export default Main;
