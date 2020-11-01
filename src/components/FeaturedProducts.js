import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import FeaturedProduct from './FeaturedProduct'
import FeaturedProductsHeader from './FeaturedProductsHeader'
import ProductsStore from '../mobx/ProductsStore'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content auto;
`

const FeaturedProducts = () =>
{
	const [ index, setIndex ] = useState(0)
	const getProducts = () => ProductsStore.all.filter(product => (product.originalPrice ?? false))
	const onLeftNav = (e) => { if (index > 0) setIndex(index - 1) }
	const onRightNav = (e) => { if (index < getProducts().length - 1) setIndex(index + 1) }

	return useObserver(() => (
		<Wrapper>
			<FeaturedProductsHeader />
			<Carousel onLeftNav={ onLeftNav } onRightNav={ onRightNav }>
				<FeaturedProduct product={ getProducts()[ index ] } />
			</Carousel>
		</Wrapper>
	))
}

export default FeaturedProducts