import React, { Fragment, useState } from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import ProductsPageSidebar from './ProductsPageSidebar'
import Products from './Products'
import styled from 'styled-components'

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
		<Fragment>
			<ProductsPageHeader isSidebarVisible={ isSidebarVisible } toggleSidebar={ toggleSidebar } />
			<SecondRow>
				<Products />
				<ProductsPageSidebar isVisible={ isSidebarVisible } />
			</SecondRow>
		</Fragment>
	)
}

export default ProductsPage