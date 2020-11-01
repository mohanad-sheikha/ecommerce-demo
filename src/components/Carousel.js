import React, { forwardRef, Fragment } from 'react'
import IndicatorGroup from './IndicatorGroup'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CarouselNavigation from './CarouselNavigation'

const Wrapper = styled.div`
	position: relative;
	display: grid;
	min-height: 0;
	background-color: white;
	padding: 2rem;
`

const Carousel = forwardRef(({ children, onLeftNav, onRightNav, onIndicatorSelect, pageCount, currentIndex, ...rest }, ref) =>
{
	return (
		<Wrapper { ...rest } ref={ ref }>
			<CarouselNavigation onLeftNav={ onLeftNav } onRightNav={ onRightNav } onIndicatorSelect={ onIndicatorSelect } pageCount={ pageCount } currentIndex={ currentIndex } />
			{ React.Children.only(children) }
		</Wrapper >
	)
})

Carousel.propTypes =
{
	onLeftNav: PropTypes.func,
	onRightNav: PropTypes.func,
}

export default Carousel