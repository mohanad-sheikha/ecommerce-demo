import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0;
	background-color: hsla(0, 0%, 95%, 50%);
	margin-top: auto;
	padding: 0.5rem 1rem;
`

export default function ProductFooter ( { product: { name, price } } )
{
	const getFormattedPrice = () => new Intl.NumberFormat( 'en-US', { style: 'currency', currency: 'USD' } ).format( price )

	return (
		<Wrapper>
			<div>{ name }</div>
			<div>{ getFormattedPrice() }</div>
		</Wrapper>
	)
}