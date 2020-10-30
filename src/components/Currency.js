import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.span`
	font-family: 'Overpass', sans-serif;
`

export default function Currency ({ value })
{
	const getFormattedCurrency = () => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

	return (
		<Wrapper>{ getFormattedCurrency() }</Wrapper>
	)
}

Currency.propTypes =
{
	value: PropTypes.number.isRequired
}