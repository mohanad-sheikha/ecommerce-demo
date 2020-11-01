import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: min-content min-content;
	grid-gap: 0.5rem;
	align-items: baseline;
`
const OriginalPrice = styled(Currency)`
	text-decoration: line-through;
	color: var(--bs-secondary);
	font-size: 0.9rem;
`
const CurrentPrice = styled(Currency)`
	color: black;
`

const ProductPrice = ({ value, originalValue }) =>
{
	return (
		<Wrapper>
			{ originalValue && <OriginalPrice value={ originalValue } /> }
			<CurrentPrice value={ value } />
		</Wrapper>
	)
}

ProductPrice.propTypes =
{
	value: PropTypes.number.isRequired,
	originalValue: PropTypes.number
}

export default ProductPrice