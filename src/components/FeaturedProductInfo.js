import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProductPrice from './ProductPrice'

const Wrapper = styled.div`
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	pointer-events: none;
	display: flex;
	flex-direction: column;
`
const Container = styled.div`
	margin-top: auto;
	margin-right: auto;
	padding: 1rem;
	background-color: white;
	border-radius: 0.5rem;
	background-color: var(--bs-light);
`
const Title = styled.h6``

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