import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from './Select'

const SectionTitle = styled.h6`
	margin-bottom: 0;
`
const SectionClearButton = styled.button.attrs(() => ({ className: 'btn btn-link' }))`
	margin: 0;
`
const SectionHeader = styled.div`
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	grid-gap: 1rem;
`
const Section = styled.div`
	display: grid;
	grid-auto-floW: row;
	grid-gap: 0.5rem;
`
const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: minmax(150px, 250px);
	overflow-x: auto;
	background-color: var(--moe-light-secondary);
	padding: 1rem;
	padding-right: 0;
	grid-gap: 1rem;
	border-radius: 0.25rem;

	> ${ Section }:last-child
	{
		padding-right: 1rem;
	}

	${ props => !props.isVisible && `
		display: none;
	`}
`

const ProductsPageFilter = ({ isVisible }) =>
{
	const [ sizeOptions, setSizeOptions ] = useState([ '11-inch', '14-inch', '15.6-inch' ])
	const [ brandOptions, setBrandOptions ] = useState([ 'Apple', 'Lenovo', 'HP', 'Acer' ])
	const [ checkedSizeOption, setCheckedSizeOption ] = useState('')
	const [ checkedBrandOption, setCheckedBrandOption ] = useState('')

	return (
		<Wrapper isVisible={ isVisible }>
			<Section>
				<SectionHeader>
					<SectionTitle>Size</SectionTitle>
					{ checkedSizeOption.length > 0 && <Fragment>
						<SectionClearButton onClick={ () => { setCheckedSizeOption('') } }><i className='fa fa-sm fa-times'></i></SectionClearButton>
					</Fragment> }
				</SectionHeader>
				<Select value={ checkedSizeOption } options={ sizeOptions } onChange={ (e) => { setCheckedSizeOption(e.target.value) } }></Select>
			</Section>
			<Section>
				<SectionHeader>
					<SectionTitle>Brand</SectionTitle>
					{ checkedBrandOption.length > 0 && <Fragment>
						<SectionClearButton onClick={ () => { setCheckedBrandOption('') } }><i className='fa fa-sm fa-times'></i></SectionClearButton>
					</Fragment> }
				</SectionHeader>
				<Select value={ checkedBrandOption } options={ brandOptions } onChange={ (e) => { setCheckedBrandOption(e.target.value) } }></Select>
			</Section>
		</Wrapper>
	)
}

ProductsPageFilter.propTypes =
{
	isVisible: PropTypes.bool
}

export default ProductsPageFilter