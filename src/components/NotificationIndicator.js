import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Indicator from './Indicator'

const Wrapper = styled(Indicator)`
	display: grid;
	justify-content: center;
	position: absolute;
	top: -5px; right: -5px;
	height: 10px;
	min-width: 10px;
	opacity: 0;
	transition: opacity 300ms;

	${ props => props.isVisible && `
		opacity: 1;
	`}

	${ props => props.variant && `
		background-color: var(--bs-${ props.variant });
	`}
`

const NotificationIndicator = ({ isVisible, variant }) =>
{
	return (
		<Wrapper isVisible={ isVisible } variant={ variant } />
	)
}

NotificationIndicator.propTypes =
{
	isVisible: PropTypes.bool,
	variant: PropTypes.oneOf([ 'primary', 'secondary', 'info', 'warning', 'danger', 'success' ])
}

NotificationIndicator.defaultProps =
{
	isVisible: false,
	variant: 'info'
}

export default NotificationIndicator