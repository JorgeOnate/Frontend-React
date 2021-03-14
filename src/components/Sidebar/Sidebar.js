import React from 'react'
import styled from 'styled-components'
import Profile from './profile'
import Menu from './Menu/menu'
import ToggleSwitch from './toggleSwitch'
import MainLogo from './MainLogo'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #B20000;
  border-radius: 30px;
`;

const Sidebar = () => {
  return (
    <Container>
      <MainLogo/>      
      <Profile/>
      <Menu />
      <ToggleSwitch/>
      <Button primary>LOGOUT</Button>
    </Container>
    )
}


export default Sidebar;
