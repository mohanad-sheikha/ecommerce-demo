import React from 'react'
import styled from 'styled-components'
import FeaturedProducts from './FeaturedProducts'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-auto-rows: 350px;
`

const HomePage = () =>
{
	return (
		<Wrapper>
			<FeaturedProducts />
		</Wrapper>
	)
}

export default HomePage