import React from 'react'
import styled from 'styled-components'
import Buttons from './buttons'


const Contents = styled.div`
  display:flex;
  padding-left:15px;
  align-items: flex-start;
  
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 600;
`;

const Title = styled.p`
  text-align:center;
  display:inline;
  align-items:center;
  font-size: 1em;
  flex-direction: row;
  
  margin: auto;
  
`;
const Text = styled.p`
  
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  align-self:center;
  align-items:center;
  color: white;
`;


const Content = (props) => {
    return (
        <Contents >
            <center >
            <Title >{props.postName} </Title>
            <Text >{props.details} </Text>
            
            <p>{props.children}</p>
            </center>
            <Buttons time="Daily" > </Buttons>
            <Buttons time="Weekly"> </Buttons>
            <Buttons time="Montly"> </Buttons>  
            
            

        </Contents>
    )
}

export default Content;