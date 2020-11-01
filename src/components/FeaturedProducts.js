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
	const onLeftNav = (e) => { setIndex(index > 0 ? index - 1 : getProducts().length - 1) }
	const onRightNav = (e) => { setIndex(index < getProducts().length - 1 ? index + 1 : 0) }
	const onIndicatorSelect = (index) => { if (index >= 0 && index < getProducts().length) setIndex(index) }

	return useObserver(() => (
		<Wrapper>
			<FeaturedProductsHeader />
			<Carousel onLeftNav={ onLeftNav } onRightNav={ onRightNav } onIndicatorSelect={ onIndicatorSelect } pageCount={ getProducts().length } currentIndex={ index }>
				<FeaturedProduct product={ getProducts()[ index ] } />
			</Carousel>
		</Wrapper>
	))
}

export default FeaturedProducts