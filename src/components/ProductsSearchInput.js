import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import events from '../events'
import { routes } from './App'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
	display: grid;
`
const Input = styled.input`
	border: none;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	min-width: 0;
`

const ProductsSearchInput = () =>
{
	const [ value, setValue ] = useState('')
	const history = useHistory()
	const inputRef = useRef(null)
	const triggerKey = '/', avoidedTags = [ 'input', 'textarea' ]
	const getProductSearchLink = () => routes.find(route => route.name == 'Search')?.path.replace(':name', value)
	const getProductsLink = () => routes.find(route => route.name == 'Products')?.path
	const canOverrideFocus = () => !avoidedTags.includes(document.activeElement.tagName)
	const onChange = (e) => { setValue(e.target.value) }
	const onKeyDown = (e) =>
	{
		if (e.key == 'Enter')
			if (value) history.push(getProductSearchLink())
			else history.push(getProductsLink())
		else if (e.key == 'Escape') inputRef.current.blur()
	}
	const onGlobalKeyDown = (e) =>
	{
		if (e.key == triggerKey && canOverrideFocus())
		{
			inputRef.current.focus();
			e.preventDefault()
		}
	}

	useEffect(() => { events.on('keydown', onGlobalKeyDown); return () => { events.remove('keydown', onGlobalKeyDown) } }, [])

	return (
		<Wrapper>
			<Input ref={ inputRef } value={ value } placeholder='Search' onChange={ onChange } onKeyDown={ onKeyDown } />
		</Wrapper>
	)
}
export default ProductsSearchInput