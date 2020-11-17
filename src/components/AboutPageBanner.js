import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border-radius: 0.25rem;
	background-color: var(--bs-primary);
	background-image: var(--bs-gradient);
	padding: 2rem;
	color: white;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
	grid-auto-rows: max-content;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Details = styled.p`
	margin-bottom: 0;
`

const AboutPageBanner = () =>
{
	return (
		<Wrapper>
			<Title>Thanks for visiting</Title>
			<Details>This demo was created to showcase my knowledge of modern web development.</Details>
		</Wrapper>
	)
}

export default AboutPageBanner