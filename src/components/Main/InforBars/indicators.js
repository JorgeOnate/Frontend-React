import React from 'react'
import styled from 'styled-components';
import Content from './content'

const Container = styled.div`
  margin-top: 4rem;
  margin-right: 4rem;
  
  display: inline-table;
  width: 350px;
  height: 200px;
  border: white 3px solid;  
  border-radius: 30px;
  justify-content: space-around;
  font-size: 5em;
  color: white;
  background: linear-gradient(135deg, rgba(253,244,64,1) 0%, rgba(250,135,53,1) 25%, rgba(247,71,52,1) 50%, rgba(225,36,101,1) 75%, rgba(160,42,144,1) 100%);
  box-shadow:5px 10px 20px 1px rgba(0,0,0,0,0.253)!important;
`;



const Indicators = () => {
  return (
    <div>
    <Container >
      <Content className="Content" postName="NewUsers" details="150 New Users"> </Content>
    </Container>
    <Container>
        <Content className="Content" postName="Searches" details="40 searches"> </Content>
      </Container>
    </div>

  )
}

export default Indicators;