import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandableSection from './ExpandableSection'
import RadioGroup from './RadioGroup'

const Wrapper = styled.div`
	padding-left: 1rem;
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
	grid-auto-rows: min-content;
	border-left: 2px solid hsl(0, 0%, 80%);
	min-width: 200px;
`

const ProductsPageSidebar = () =>
{
	const [ sizeOptions, setSizeOptions ] = useState([ '11-inch', '14-inch', '15.6-inch' ])
	const [ checkedSizeOption, setCheckedSizeOption ] = useState(null)
	const onSizeOptionChange = (e) => { setCheckedSizeOption(e.target.value) }

	return (
		<Wrapper>
			<ExpandableSection title='Size'>
				<RadioGroup options={ sizeOptions } onOptionSelect={ onSizeOptionChange } />
			</ExpandableSection>
		</Wrapper>
	)
}

export default ProductsPageSidebar