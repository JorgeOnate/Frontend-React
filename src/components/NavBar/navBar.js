import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left:0;
    right:0;    
    top:0;    
    display: flex;
    flex-direction: row-reverse;
    align-items: inherit;
    text-align:left;
    padding: 1em;
    //box-shadow: 0.5px 0.5px 0.5px #9E9E9E;
`

const NavBar = () =>{
    return (
        <Container >
            Notification, bell icon, account details, ?seach bar? , home 
        </Container>
    )
}

export default NavBar