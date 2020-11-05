import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.25rem;
	grid-template-columns: min-content min-content;
`
const ArrowButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	z-index: 1;
	height: 32px;
	width: 32px;
	border-radius: 50% !important;
	background-color: var(--moe-light-secondary);
`
const ArrowWrapper = styled.div`
`
const LeftArrowWrapper = styled(ArrowWrapper)`
`
const RightArrowWrapper = styled(ArrowWrapper)`
`
const LeftArrow = ({ onNav }) => (
	<LeftArrowWrapper>
		<ArrowButton onClick={ onNav }>
			<i className='fa fa-chevron-left'></i>
		</ArrowButton>
	</LeftArrowWrapper >
)
const RightArrow = ({ onNav }) => (
	<RightArrowWrapper>
		<ArrowButton onClick={ onNav }>
			<i className='fa fa-chevron-right'></i>
		</ArrowButton>
	</RightArrowWrapper >
)

const NavigationArrows = ({ onLeftNav, onRightNav }) =>
{
	return (
		<Wrapper>
			<LeftArrow onNav={ onLeftNav } />
			<RightArrow onNav={ onRightNav } />
		</Wrapper>
	)
}

NavigationArrows.propTypes =
{
	onLeftNav: PropTypes.func,
	onRightNav: PropTypes.func
}

export default NavigationArrows