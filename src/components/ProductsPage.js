import React from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import ProductsPageSidebar from './ProductsPageSidebar'
import Products from './Products'
import styled from 'styled-components'

const SecondRow = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 2fr 1fr;
	grid-gap: 1rem;
`

export default function ProductsPage ()
{
	return (
		<>
			<ProductsPageHeader />
			<hr />
			<SecondRow>
				<Products />
				<ProductsPageSidebar />
			</SecondRow>
		</>
	)
}