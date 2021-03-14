import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/ProfileImg.png'

const Container = styled.div`
    margin-top: 2rem;
    display:block;
`

const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    align-self:center;
    color: ${({ theme }) => theme.textColor};
`

const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image}/>
            <ProfileName> Ciro Gamboa </ProfileName>            
        </Container>
        
    )
}

export default Profile