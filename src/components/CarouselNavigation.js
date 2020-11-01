import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IndicatorGroup from './IndicatorGroup'
import NavigationArrows from './NavigationArrows'

const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.5rem;
	grid-template-columns: min-content min-content;
	align-items: center;
`

const CarouselNavigation = ({ onLeftNav, onRightNav, onIndicatorSelect, pageCount, currentIndex }) =>
{
	return (
		<Wrapper>
			<NavigationArrows onLeftNav={ onLeftNav } onRightNav={ onRightNav } />
			<IndicatorGroup onSelect={ onIndicatorSelect } count={ pageCount } currentIndex={ currentIndex } />
		</Wrapper>
	)
}

CarouselNavigation.propTypes =
{
	onLeftNav: PropTypes.func,
	onRightNav: PropTypes.func,
	onIndicatorSelect: PropTypes.func,
	pageCount: PropTypes.number.isRequired,
	currentIndex: PropTypes.number.isRequired
}

export default CarouselNavigation