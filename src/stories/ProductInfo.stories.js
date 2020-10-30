import React from 'react'
import ProductInfo from '../components/ProductInfo'

export default { title: 'Components/Product Info', component: ProductInfo }

const Template = (args) => <ProductInfo { ...args } />

export const Default = Template.bind({})

Default.args =
{
	product:
	{
		name: 'Product',
		price: 10.99
	}
}