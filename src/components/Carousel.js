import React, { forwardRef, Fragment, useState, useEffect } from 'react'
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
	const [ timer, setTimer ] = useState(null)
	const stopTimer = () => { clearInterval(timer); setTimer(null) }
	const startTimer = () => { setTimer(setInterval(onRightNav, 7000)) }
	const onBeforeNav = (callback) => { stopTimer(); callback(); startTimer() }

	useEffect(() => { startTimer() }, [])

	return (
		<Wrapper { ...rest } ref={ ref }>
			<CarouselNavigation onLeftNav={ () => { onBeforeNav(onLeftNav) } } onRightNav={ () => { onBeforeNav(onRightNav) } } onIndicatorSelect={ onIndicatorSelect } pageCount={ pageCount } currentIndex={ currentIndex } />
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