import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export default function ProductInfo ({ product: { name, price } })
{
	return (
		<Wrapper>
			<div>{ name }</div>
			<Currency value={ price } />
		</Wrapper>
	)
}

ProductInfo.propTypes =
{
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
}