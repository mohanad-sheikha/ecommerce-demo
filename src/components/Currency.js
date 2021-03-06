import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.span`
	font-family: 'Overpass', sans-serif;
	line-height: 1;
`

const Currency = forwardRef(({ value, ...rest }, ref) =>
{
	const getFormattedCurrency = () => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)

	return <Wrapper { ...rest } ref={ ref }>{ getFormattedCurrency() }</Wrapper>
})

Currency.propTypes =
{
	value: PropTypes.number.isRequired
}

export default Currency