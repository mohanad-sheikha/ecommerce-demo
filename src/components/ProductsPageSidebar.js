import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
	padding: 1rem;
	background-color: hsl(0, 0%, 85%);
	display: grid;
	grid-auto-flow: row;
	grid-gap: 0.5rem;
	grid-auto-rows: min-content;
	border-radius: 0.5rem;
`
const FormControlRow = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-gap: 0.5rem;
	grid-template-columns: 1fr 3fr;
`

export default function ProductsPageSidebar ( props )
{
	return (
		<Wrapper>
			<FormControlRow>
				<label>Filter</label>
				<input className='form-control form-control-sm' />
			</FormControlRow>
			<FormControlRow>
				<label>Sort</label>
				<input className='form-control form-control-sm' />
			</FormControlRow>
		</Wrapper>
	)
}