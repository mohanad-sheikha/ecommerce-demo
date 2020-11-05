import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	margin: 0;
	width: 10px;
	height: 10px;
	border-radius: 50% !important;
	transition: background-color 150ms;
	background-color: var(--moe-light-secondary);

	${ props => props.isActive && `
		background-color: var(--bs-secondary);
	`}
`

const Indicator = forwardRef(({ isActive, onSelect, ...rest }, ref) =>
{
	return <Wrapper { ...rest } ref={ ref } isActive={ isActive } onClick={ onSelect }></Wrapper>
})

Indicator.propTypes =
{
	isActive: PropTypes.bool
}

export default Indicator