import React from 'react'
import ExpandableSection from '../components/ExpandableSection'
import RadioGroup from '../components/RadioGroup'

export default { title: 'Components/Expandable Section', component: ExpandableSection }

const Template = (args) => <ExpandableSection { ...args } />

export const Default = Template.bind({})

Default.args =
{
	title: 'Expandable Section',
	children: <RadioGroup options={ [ 'Option 1', 'Option 2', 'Option 3' ] } />
}