import React from 'react'
import styled  from 'styled-components'
//import Image from '../../assets/images/TempLogo.png'
//import Image2 from '../../assets/images/TempLogoWhite.png'
import Image3 from '../../assets/images/TempLogoMain.png'


const Container = styled.div`
    margin-top: 3.8rem;
`
const Logo = styled.img`
    height: 6rem;
    margin-top:0px;    
`

const MainLogo = () =>{
    return (
        <Container>
            <Logo src={Image3}/>    
        </Container>
    )
}

export default MainLogo