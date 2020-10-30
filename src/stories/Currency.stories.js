import React from 'react'
import Currency from '../components/Currency'

export default { title: 'Components/Currency', component: Currency }

const Template = (args) => <Currency { ...args } />

export const Default = Template.bind({})

Default.args =
{
	value: 850.99
}