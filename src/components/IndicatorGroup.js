import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Indicator from './Indicator'

const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.25rem;
	grid-auto-flow: column;
	grid-auto-columns: min-content;
`

const IndicatorGroup = forwardRef(({ count, currentIndex, onSelect, ...rest }, ref) => (
	<Wrapper { ...rest } ref={ ref }>
		{ new Array(count).fill(0).map((value, index) => (
			<Indicator key={ index } isActive={ currentIndex == index } onSelect={ () => { onSelect(index) } } />
		)) }
	</Wrapper>
))

IndicatorGroup.propTypes =
{
	count: PropTypes.number.isRequired,
	currentIndex: PropTypes.number.isRequired
}

export default IndicatorGroup