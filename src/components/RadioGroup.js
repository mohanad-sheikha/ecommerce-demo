import React, { useState } from 'react'
import styled from 'styled-components'
import Radio from './Radio'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'

export default function Radios ({ options, onOptionSelect })
{
	const [ checkedOption, setCheckedOption ] = useState(null)
	const [ groupId ] = useState(uniqid())
	const onInputChange = (e) => { setCheckedOption(e.target.value); onOptionSelect(e) }

	return (
		<form>
			{options && options.map(option => <Radio key={ option } groupId={ groupId } label={ option } value={ option } isChecked={ checkedOption == option } onInputChange={ onInputChange } />) }
		</form>
	)
}

Radios.propTypes =
{
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onOptionSelect: PropTypes.func
}