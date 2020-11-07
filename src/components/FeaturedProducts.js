import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import FeaturedProduct from './FeaturedProduct'
import ProductsStore from '../mobx/ProductsStore'
import Skeleton from 'react-loading-skeleton'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content auto;
	grid-gap: 1rem;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const RoundedCarousel = styled(Carousel)`
	border-radius: 0.25rem;
	overflow: hidden;
`
const loadingState = <Fragment>
	<Title><Skeleton width={ 200 } /></Title>
	<Skeleton width={ '100%' } height={ '100%' } />
</Fragment>

const FeaturedProducts = () =>
{
	const [ index, setIndex ] = useState(0)
	const { onSale: products, isLoading } = ProductsStore
	const onLeftNav = () => { setIndex(index => index > 0 ? index - 1 : products.length - 1) }
	const onRightNav = () => { setIndex(index => (index + 1) % products.length) }
	const onIndicatorSelect = (newIndex) => { setIndex(Math.abs(newIndex) % products.length) }

	return (
		<Wrapper>
			{ isLoading ? loadingState : <Fragment>
				<Title>Featured Products</Title>
				<RoundedCarousel onLeftNav={ onLeftNav } onRightNav={ onRightNav } onIndicatorSelect={ onIndicatorSelect } pageCount={ products.length } currentIndex={ index }>
					<FeaturedProduct product={ products[ index ] } />
				</RoundedCarousel>
			</Fragment> }
		</Wrapper>
	)
}

export default observer(FeaturedProducts)