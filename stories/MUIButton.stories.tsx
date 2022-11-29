import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MUIButton } from './MUIButton'

export default {
	title: 'Example/MUIButton',
  component: MUIButton,
} as ComponentMeta<typeof MUIButton>

const Template: ComponentStory<typeof MUIButton> = (args) => (
  <MUIButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}