import React from 'react'
import ProductFooter from '../components/ProductFooter'

export default { title: 'Components/Product Footer', component: ProductFooter }

const Template = (args) => <ProductFooter { ...args } />

export const Default = Template.bind({})

Default.args =
{
	product:
	{
		name: 'Product',
		price: 10.99
	}
}