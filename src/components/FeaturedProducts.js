import React, { Fragment, useState } from 'react'
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
	height: 350px;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const RoundedCarousel = styled(Carousel)`
	border-radius: 0.25rem;
	overflow: hidden;
`
const loadingState = <Fragment>
	<Title><Skeleton width={ 250 } /></Title>
	<Skeleton width={ '100%' } height={ '100%' } />
</Fragment>

const FeaturedProducts = () =>
{
	const { onSale: products, isLoading } = ProductsStore

	return (
		<Wrapper>
			{ isLoading ? loadingState : <Fragment>
				<Title>Featured Deals</Title>
				<RoundedCarousel>
					{ products.map(product => <FeaturedProduct key={ product.id } product={ product } />) }
				</RoundedCarousel>
			</Fragment> }
		</Wrapper>
	)
}

export default observer(FeaturedProducts)