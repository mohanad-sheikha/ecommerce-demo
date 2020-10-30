import React from 'react'
import ProductsPageHeader from '../components/ProductsPageHeader'

export default { title: 'Components/Products Page Header', component: ProductsPageHeader }

const Template = (args) => <ProductsPageHeader { ...args } />

export const Default = Template.bind({})

Default.args =
{
	isSidebarVisible: false
}