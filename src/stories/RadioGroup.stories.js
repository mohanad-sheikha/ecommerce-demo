import React from 'react'
import RadioGroup from '../components/RadioGroup'

export default { title: 'Components/Radio Group', component: RadioGroup }

const Template = (args) => <RadioGroup { ...args } />

export const Default = Template.bind({})

Default.args =
{
	options: [ 'Option 1', 'Option 2', 'Option 3' ]
}