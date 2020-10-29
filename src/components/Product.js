import React from 'react'
import styled from 'styled-components'
import ProductFooter from './ProductFooter'

const Wrapper = styled.div`
	background-color: hsl(0, 0%, 80%);
	padding-bottom: 0;
	width: 200px;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	overflow: hidden;
`

export default function Product ( { product } )
{
	return (
		<Wrapper>
			<ProductFooter product={ product } />
		</Wrapper>
	)
}