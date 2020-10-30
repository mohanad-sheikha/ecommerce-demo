import React, { useState } from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import ProductsPageSidebar from './ProductsPageSidebar'
import Products from './Products'
import styled from 'styled-components'

const SecondRow = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 2fr minmax(min-content, 250px);
	grid-gap: 1rem;

	> *
	{
		padding-top: 1rem;
	}
`

export default function ProductsPage ()
{
	const [ isSidebarVisible, setIsSidebarVisible ] = useState(true)

	const toggleSidebar = () => { setIsSidebarVisible(!isSidebarVisible) }

	return (
		<>
			<ProductsPageHeader isSidebarVisible={ isSidebarVisible } toggleSidebar={ toggleSidebar } />
			<SecondRow>
				<Products />
				{ isSidebarVisible && <ProductsPageSidebar /> }
			</SecondRow>
		</>
	)
}