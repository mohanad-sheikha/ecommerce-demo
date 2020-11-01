import React, { forwardRef, Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
	display: grid;
	min-height: 0;
	background-color: white;
	padding: 1rem;
`
const ArrowButton = styled.button.attrs(() => ({ className: 'btn btn-link border' }))`
	padding: 0;
	z-index: 1;
	height: 32px;
	width: 32px;
	border-radius: 50%;
	background-color: var(--bs-light);
`
const ArrowWrapper = styled.div`
	position: absolute;
	top: 0; bottom: 0;
	display: flex;
	padding: 1rem;

	> *
	{
		margin: auto;
	}
`
const LeftArrowWrapper = styled(ArrowWrapper)`
	left: 0;
`
const RightArrowWrapper = styled(ArrowWrapper)`
	right: 0;
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

const Carousel = ({ children, onLeftNav, onRightNav }) =>
{
	return (
		<Wrapper>
			<LeftArrow onNav={ onLeftNav }></LeftArrow>
			{ React.Children.only(children) }
			<RightArrow onNav={ onRightNav }></RightArrow>
		</Wrapper >
	)
}

export default Carousel