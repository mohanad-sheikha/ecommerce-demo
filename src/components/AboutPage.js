import React, { Fragment } from 'react'
import styled from 'styled-components'
import AboutPageBanner from './AboutPageBanner'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
`
const Title = styled.h4`
	margin-bottom: 0;
`

const AboutPage = () =>
{
	return (
		<Wrapper>
			<Title>About</Title>
			<AboutPageBanner />
		</Wrapper>
	)
}

export default AboutPage