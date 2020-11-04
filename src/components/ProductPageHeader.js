import React from 'react'
import styled from 'styled-components'
import ProductPrice from './ProductPrice'
import PropTypes from 'prop-types'
import CartStore from '../mobx/CartStore'
import { useObserver } from 'mobx-react-lite'

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.25rem;
`
const Title = styled.h4`
	margin-bottom: 0;
`
const Button = styled.button.attrs(() => ({ className: 'btn btn-sm btn-primary bg-gradient rounded-lg' }))`
	width: max-content;

	${ props => props.hasLeftIcon && `
		> svg, i
		{
			margin-right: 0.25rem;
		}
	`}
`
const SecondRow = styled.div`
	display: grid;
	justify-content: space-between;
	grid-template-columns: auto  max-content;
	grid-gap: 1rem;
	align-items: self-end;
`

const ProductPageHeader = ({ product: { name, price, originalPrice }, product }) =>
{
	const addToCart = () => { CartStore.addProduct(product) }

	return useObserver(() => (
		<Wrapper>
			<Title>{ name }</Title>
			<SecondRow>
				<ProductPrice value={ price } originalValue={ originalPrice } />
				<Button onClick={ addToCart } hasLeftIcon><i className='fa fa-plus'></i> Add to Cart</Button>
			</SecondRow>
		</Wrapper>
	))
}

ProductPageHeader.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		originalPrice: PropTypes.number,
	}).isRequired
}

export default ProductPageHeader