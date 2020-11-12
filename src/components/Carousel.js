import React, { Fragment, forwardRef, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CarouselNavigation from './CarouselNavigation'
import useIndex from '../hooks/useIndex'
import { useTransition, animated, config } from 'react-spring'

const Wrapper = styled.div`
	position: relative;
	display: grid;
	background-color: white;
`
const PositionedCarouselNavigation = styled(CarouselNavigation)`
	position: absolute;
	top: 2rem; left: 2rem; right: 2rem;
	z-index: 1;
`
const Container = styled(animated.div)`
	display: grid;
	position: relative;
	min-height: 0;
`
const CenteredMetaText = styled.div`
	margin: auto;
	color: var(--bs-secondary);
`
const emptyState = () => <Fragment>
	<CenteredMetaText>Nothing here to display</CenteredMetaText>
</Fragment>

const Carousel = forwardRef(({ children, ...rest }, ref) =>
{
	const [ index, increaseIndex, decreaseIndex, setIndex ] = useIndex(children.length - 1)
	const timer = useRef(null)
	const didManualNav = useRef(false)
	const transitions = useTransition(index, index => index, {
		from: { opacity: 0 }, enter: { opacity: 1 }, leave: { display: 'none' }, config: config.gentle
	})
	const autoRightNav = () => { if (!didManualNav.current) onRightNav(); didManualNav.current = false }
	const onLeftNav = () => { didManualNav.current = true; decreaseIndex() }
	const onRightNav = () => { didManualNav.current = true; increaseIndex() }
	const onIndicatorSelect = (newIndex) => { didManualNav.current = true; setIndex(newIndex) }

	useEffect(() => { timer.current = setInterval(autoRightNav, 7000); return () => { clearInterval(timer.current) } }, [])

	return (
		<Wrapper { ...rest } ref={ ref }>
			{ children.length == 0 ? emptyState() : <Fragment>
				<PositionedCarouselNavigation onIndicatorSelect={ onIndicatorSelect } onLeftNav={ onLeftNav } onRightNav={ onRightNav } pageCount={ children.length } currentIndex={ index } />
				{ transitions.map(({ item: index, props: style, key }) => (
					<Container key={ key } style={ style }>{ children[ index ] }</Container>
				)) }
			</Fragment> }
		</Wrapper>
	)
})

export default Carousel