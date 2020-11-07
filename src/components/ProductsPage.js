import React, { useState } from 'react'
import ProductsPageHeader from './ProductsPageHeader'
import Products from './Products'
import styled from 'styled-components'
import ProductsPageFilter from './ProductsPageFilter'
import ProductsStore from '../mobx/ProductsStore'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
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
			<Products products={ ProductsStore.all } isLoading={ ProductsStore.isLoading } />
		</Wrapper>
	)
}

export default observer(ProductsPage)