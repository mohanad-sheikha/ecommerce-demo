import React from 'react'
import ProductsPage from '../components/ProductsPage'

export default { title: 'Components/Products Page', component: ProductsPage }

const Template = (args) => <ProductsPage { ...args } />

export const Default = Template.bind({})