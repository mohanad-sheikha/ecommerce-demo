import React, { useState } from 'react'
import styled from 'styled-components'
import Radio from './Radio'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

const Wrapper = styled.form`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.25rem;
`

const RadioGroup = ({ options, onOptionSelect }) =>
{
	const [ checkedOption, setCheckedOption ] = useState(null)
	const [ groupId ] = useState(uniqid())
	const onInputChange = (e) => { setCheckedOption(e.target.value); onOptionSelect(e) }

	return (
		<Wrapper>
			{options && options.map(option => (
				<Radio key={ option } groupId={ groupId } label={ option } value={ option } isChecked={ checkedOption == option } onInputChange={ onInputChange } />
			)) }
		</Wrapper>
	)
}

RadioGroup.propTypes =
{
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onOptionSelect: PropTypes.func
}

export default RadioGroup