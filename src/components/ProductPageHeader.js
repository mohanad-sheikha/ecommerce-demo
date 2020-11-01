import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
`
const Title = styled.h4`
	margin-bottom: 0;
`

const ProductPageHeader = ({ product: { name, price } }) =>
{
	return (
		<Wrapper>
			<Title>{ name }</Title>
			<Currency value={ price } />
		</Wrapper>
	)
}

ProductPageHeader.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
}

export default ProductPageHeader