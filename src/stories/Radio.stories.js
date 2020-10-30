import React from 'react'
import Radio from '../components/Radio'
import uniqid from 'uniqid'

export default { title: 'Components/Radio', component: Radio }

const Template = (args) => <Radio { ...args } />

export const Default = Template.bind({})

Default.args =
{
	groupId: uniqid(),
	label: 'Label',
	value: 'value'
}