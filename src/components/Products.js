import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import uniqid from 'uniqid'
import ProductsStore from '../mobx/ProductsStore'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 1rem;
`

export default function Products ()
{
	return useObserver(() => (
		<Wrapper>
			{ ProductsStore.all && ProductsStore.all.map(product => <Product key={ product.id } product={ product } />) }
		</Wrapper>
	))
}