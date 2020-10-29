import React from 'react'
import styled from 'styled-components'
import Product from './Product'

export default function Products ()
{
	const product = { name: 'test', price: 99.99 }
	
	return (
		<div>
			<Product product={ product } />
		</div>
	)
}