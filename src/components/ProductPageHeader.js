import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'

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

const ProductPageHeader = ({ product: { name, price } }) =>
{
	return (
		<Wrapper>
			<Title>{ name }</Title>
			<Currency value={ price } />
		</Wrapper>
	)
}

export default ProductPageHeader