import React from 'react'
import MenuLink from './menuLink'
import styled from  'styled-components'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Home" icon={'home'} />
            <MenuLink title="Analytics" icon={'map-marker'} active />
            <MenuLink title="Reports" icon={'file-multiple'}/>
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu