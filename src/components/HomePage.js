import React from 'react'
import styled from 'styled-components'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 2rem;
`

const HomePage = () =>
{
	return (
		<Wrapper>
			<FeaturedProducts />
			<NewProducts />
		</Wrapper>
	)
}

export default HomePage