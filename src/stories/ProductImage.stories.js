import React from 'react'
import ProductImage from '../components/ProductImage'

export default { title: 'Components/Product Image', component: ProductImage }

const Template = (args) => <ProductImage { ...args } />

export const Default = Template.bind({})

Default.args =
{
	product:
	{
		imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg'
	}
}