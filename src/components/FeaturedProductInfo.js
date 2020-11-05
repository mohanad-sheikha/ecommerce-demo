import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductPrice from './ProductPrice'

const Wrapper = styled.div`
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: 2rem;
	pointer-events: none;
	z-index: 1;
	display: flex;
	flex-direction: column;
`
const Container = styled.div`
	margin-top: auto;
	margin-right: auto;
	max-width: 100%;
	padding: 1rem;
	border-radius: 0.5rem;
	background-color: var(--moe-light-secondary);
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
			<Container>
				<Title>{ name }</Title>
				<ProductPrice value={ price } originalValue={ originalPrice } />
			</Container>
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