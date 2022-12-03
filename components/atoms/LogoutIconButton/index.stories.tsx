import { ComponentStory, ComponentMeta } from '@storybook/react'
import LogoutIconButton from './index'

export default {
  title: 'atoms/LogoutIconButton',
  argTypes: {
    onClick: {
      description: 'onClickイベントハンドラ',
    },
  },
} as ComponentMeta<typeof LogoutIconButton>

const Template: ComponentStory<typeof LogoutIconButton> = (args) => (
  <LogoutIconButton {...args} />
)

export const IconButton = Template.bind({})
IconButton.args = {
  onClick: () => {
    // do nothing.
  },
}
