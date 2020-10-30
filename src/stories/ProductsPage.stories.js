import React from 'react'
import ProductsPage from '../components/ProductsPage'

export default { title: 'Pages/Products', component: ProductsPage }

const Template = (args) => <ProductsPage { ...args } />

export const Default = Template.bind({})