import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
`
const Title = styled.h4`
	margin-bottom: 0;
`

const FeaturedProductsHeader = () =>
{
	return (
		<Wrapper>
			<Title>Featured Products</Title>
		</Wrapper>
	)
}

export default FeaturedProductsHeader