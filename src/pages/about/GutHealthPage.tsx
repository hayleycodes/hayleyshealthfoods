import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { AboutMenu } from '../../components/AboutMenu/AboutMenu'
import { StyledHeadingOne } from '../../components/common/Headings.styled'
import { Footer } from '../../components/Footer/Footer'

const GutHealthPage: React.FC = () => {
    return (
        <React.Fragment>
            <Nav />
            <AboutMenu></AboutMenu>
            <StyledHeadingOne>Gut Health</StyledHeadingOne>
            <Footer />
        </React.Fragment>
    )
}

export default GutHealthPage
