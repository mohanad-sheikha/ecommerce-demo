import React, { Fragment, useState } from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import ProductsPageSidebar from './ProductsPageSidebar'
import Products from './Products'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;
`
const SecondRow = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 1rem;
`

const ProductsPage = () =>
{
	const [ isSidebarVisible, setIsSidebarVisible ] = useState(true)
	const toggleSidebar = () => { setIsSidebarVisible(!isSidebarVisible) }

	return (
		<Wrapper>
			<ProductsPageHeader isSidebarVisible={ isSidebarVisible } toggleSidebar={ toggleSidebar } />
			<SecondRow>
				<Products />
				<ProductsPageSidebar isVisible={ isSidebarVisible } />
			</SecondRow>
		</Wrapper>
	)
}

export default ProductsPage