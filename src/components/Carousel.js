import React, { forwardRef, Fragment, useEffect, useRef } from 'react'
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
const PositionedCarouselNavigation = styled(CarouselNavigation)`
	position: absolute;
	top: 2rem; left: 2rem; right: 2rem;
	z-index: 1;
`
const Carousel = forwardRef(({ children, onLeftNav, onRightNav, onIndicatorSelect, pageCount, currentIndex, ...rest }, ref) =>
{
	const timer = useRef(null)
	const didManualNav = useRef(false)
	const onBeforeNav = (callback) => { didManualNav.current = true; callback() }
	const autoRightNav = () => { if (!didManualNav.current) onRightNav(); didManualNav.current = false }

	useEffect(() => { timer.current = setInterval(autoRightNav, 7000); return () => { clearInterval(timer.current) } }, [])

	return (
		<Wrapper { ...rest } ref={ ref }>
			<PositionedCarouselNavigation onLeftNav={ () => { onBeforeNav(onLeftNav) } } onRightNav={ () => { onBeforeNav(onRightNav) } }
				onIndicatorSelect={ (index) => { onBeforeNav(() => { onIndicatorSelect(index) }) } } pageCount={ pageCount } currentIndex={ currentIndex } />
			{ React.Children.only(children) }
		</Wrapper >
	)
})

Carousel.propTypes =
{
	onLeftNav: PropTypes.func,
	onRightNav: PropTypes.func,
	onIndicatorSelect: PropTypes.func,
	pageCount: PropTypes.number.isRequired,
	currentIndex: PropTypes.number.isRequired
}

export default Carousel