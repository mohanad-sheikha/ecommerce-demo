import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductPrice from './ProductPrice'

const Wrapper = styled.div`
	position: absolute;
	bottom: 2rem; left: 2rem;
	z-index: 1;
	max-width: 100%;
	padding: 1rem;
	border-radius: 0.5rem;
	background-color: var(--moe-secondary-light);
	overflow: hidden;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
`
const Title = styled.h6`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	overflow-wrap: break-word;
	margin-bottom: 0;
`
const ProductPriceWrapper = styled.div`
	color: black;
`

const FeaturedProductInfo = ({ product: { name, price, originalPrice } }) =>
{
	return (
		<Wrapper>
			<Title>{ name }</Title>
			<ProductPriceWrapper><ProductPrice value={ price } originalValue={ originalPrice } /></ProductPriceWrapper>
		</Wrapper>
	)
}

FeaturedProductInfo.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		originalPrice: PropTypes.number,
	})
}

export default FeaturedProductInfo