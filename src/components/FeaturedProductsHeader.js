import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
	align-items: baseline;
	justify-content: space-between;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Actions = styled.div`
`

const FeaturedProductsHeader = () =>
{
	return (
		<Wrapper>
			<Title>Featured Products</Title>
			<Actions></Actions>
		</Wrapper>
	)
}

export default FeaturedProductsHeader