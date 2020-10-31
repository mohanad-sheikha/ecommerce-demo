import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RadioButton = styled.button`
	width: 100%;
	outline: none;
	border: none;
	box-shadow: none;
	background-color: transparent;
	text-align: left;
	padding: 0;
	color: var(--bs-secondary);

	:focus
	{
		outline: none;
	}
	:active
	{
		color: var(--bs-primary);
		font-weight: bold;
	}
`
const Wrapper = styled.div`
	position: relative;
`
const Label = styled.label`
	cursor: pointer;
	color: var(--bs-secondary);

	${ props => props.isChecked && `
		color: var(--bs-primary);
		font-weight: bold;
	`}
`
const Input = styled.input.attrs(() => ({ type: 'radio' }))`
	position: absolute;
	pointer-events: none;
	opacity: 0;
	display: none;
`

const Radio = ({ isChecked, groupId, label, value, onInputChange }) =>
{
	const inputRef = useRef(null)
	const onLabelClick = () => { inputRef.current.click() }

	return (
		<Wrapper>
			<Input ref={ inputRef } name={ groupId } onChange={ onInputChange } value={ value } type='radio' checked={ isChecked } />
			<Label onClick={ onLabelClick } isChecked={ isChecked }>{ label }</Label>
		</Wrapper>
	)
}

Radio.propTypes =
{
	isChecked: PropTypes.bool,
	groupId: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onInputChange: PropTypes.func
}

Radio.defaultProps =
{
	isChecked: false
}

export default Radio