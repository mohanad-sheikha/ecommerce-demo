import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandableSection from './ExpandableSection'
import RadioGroup from './RadioGroup'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
	padding-left: 1rem;
	border-left: 2px solid hsl(0, 0%, 80%);
	min-width: 200px;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
	grid-auto-rows: min-content;

	${ props => !props.isVisible && `
		display: none;
	`}
`

const ProductsPageSidebar = ({ isVisible }) =>
{
	const [ sizeOptions, setSizeOptions ] = useState([ '11-inch', '14-inch', '15.6-inch' ])
	const [ checkedSizeOption, setCheckedSizeOption ] = useState(null)
	const onSizeOptionChange = (e) => { setCheckedSizeOption(e.target.value) }

	return (
		<Wrapper isVisible={ isVisible }>
			<ExpandableSection title='Size'>
				<RadioGroup options={ sizeOptions } onOptionSelect={ onSizeOptionChange } />
			</ExpandableSection>
		</Wrapper>
	)
}

ProductsPageSidebar.propTypes =
{
	isVisible: PropTypes.bool
}

ProductsPageSidebar.defaultProps =
{
	isVisible: true
}

export default ProductsPageSidebar