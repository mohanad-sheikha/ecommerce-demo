import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import FeaturedProduct from './FeaturedProduct'
import FeaturedProductsHeader from './FeaturedProductsHeader'
import ProductsStore from '../mobx/ProductsStore'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content auto;
	grid-gap: 1rem;
`

const FeaturedProducts = () =>
{
	const [ index, setIndex ] = useState(0)
	const { onSale: products } = ProductsStore
	const onLeftNav = () => { setIndex(index => index > 0 ? index - 1 : products.length - 1) }
	const onRightNav = () => { setIndex(index => (index + 1) % products.length) }
	const onIndicatorSelect = (newIndex) => { setIndex(Math.abs(newIndex) % products.length) }

	return (
		<Wrapper>
			<FeaturedProductsHeader />
			<Carousel onLeftNav={ onLeftNav } onRightNav={ onRightNav } onIndicatorSelect={ onIndicatorSelect } pageCount={ products.length } currentIndex={ index }>
				<FeaturedProduct product={ products[ index ] } />
			</Carousel>
		</Wrapper>
	)
}

export default observer(FeaturedProducts)