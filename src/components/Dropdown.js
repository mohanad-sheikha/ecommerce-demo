import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'

const DropdownItem = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	box-shadow: none !important;
	
	> *
	{
		padding: 0.5rem 1rem !important;
		text-align: left;

		&:hover
		{
			background-color: var(--moe-light-secondary);
		}
	}
`
const Container = styled.div`
	display: grid;
	grid-auto-flow: row;

	${ DropdownItem }:not(:last-child)
	{
		border-bottom: var(--moe-border-small);
		border-color: hsl(0, 0%, 90%);
	}
`
const Wrapper = styled(Tippy)`
	overflow: hidden;

	> *
	{
		padding: 0;
	}
`

const Dropdown = ({ children, reference }) =>
{
	const [ isVisible, setIsVisible ] = useState(false)
	const toggleVisible = () => { setIsVisible(isVisible => !isVisible) }
	const getContent = () => <Container>
		{ React.Children.map(children, child => <DropdownItem onClick={ () => { setIsVisible(false) } }>
			{ child }
		</DropdownItem>) }
	</Container>

	useEffect(() => { reference.current.addEventListener('click', toggleVisible) }, [ reference ])

	return (
		<Wrapper arrow={ false } theme='light' placement='bottom-end'
			visible={ isVisible } interactive content={ getContent() }
			reference={ reference } onClickOutside={ () => { setIsVisible(false) } }>
		</Wrapper>
	)
}

Dropdown.propTypes =
{
	reference: PropTypes.object.isRequired
}

export default Dropdown