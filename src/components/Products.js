import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import uniqid from 'uniqid'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
`

export default function Products ()
{
	const data = [ { id: uniqid(), name: 'test', price: 99.99, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg' } ]

	return (
		<Wrapper>
			{ data && data.map(product => <Product key={ product.id } product={ product } />) }
		</Wrapper>
	)
}