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
	background-color: var(--moe-light-secondary);
	overflow: hidden;
`
const Title = styled.h6`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	overflow-wrap: break-word;
`

const FeaturedProductInfo = ({ product: { name, price, originalPrice } }) =>
{
	return (
		<Wrapper>
			<Title>{ name }</Title>
			<ProductPrice value={ price } originalValue={ originalPrice } />
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