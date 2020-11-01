import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	padding: 0;
	margin: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	transition: background-color 150ms;
	background-color: var(--moe-light-secondary);

	${ props => props.isActive && `
		background-color: var(--bs-secondary);
	`}
`

const Indicator = ({ isActive, onSelect }) =>
{
	return (
		<Wrapper isActive={ isActive } onClick={ onSelect }></Wrapper>
	)
}

Indicator.propTypes =
{
	isActive: PropTypes.bool
}

export default Indicator