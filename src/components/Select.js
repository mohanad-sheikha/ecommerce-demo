import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.select`
	outline: none;
	border: none;
	-webkit-appearance: none;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
`

const Select = ({ options, value, onChange }) =>
{
	return (
		<Wrapper value={ value } onChange={ onChange }>
			<option value={ null }>Any</option>
			{ options && options.map(option => <option key={ option } value={ option }>{ option }</option>) }
		</Wrapper>
	)
}

Select.propTypes =
{
	options: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])).isRequired,
	onChange: PropTypes.func
}

export default Select