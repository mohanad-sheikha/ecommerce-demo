import React, { Fragment, useState } from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import Products from './Products'
import styled from 'styled-components'
import ProductsPageFilter from './ProductsPageFilter'

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
	const [ isFilterVisible, setIsFilterVisible ] = useState(false)
	const toggleFilter = () => { setIsFilterVisible(!isFilterVisible) }

	return (
		<Wrapper>
			<ProductsPageHeader isFilterVisible={ isFilterVisible } toggleFilter={ toggleFilter } />
			<ProductsPageFilter isVisible={ isFilterVisible } />
			<Products />
		</Wrapper>
	)
}

export default ProductsPage