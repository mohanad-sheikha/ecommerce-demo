import React from 'react'
import Products from '../components/Products'

export default { title: 'Components/Products', component: Products }

const Template = (args) => <Products { ...args } />

export const Default = Template.bind({})

Default.args =
{
	product:
	{
		name: 'Laptop',
		price: 899.99,
		imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
	}
}