import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuIconButton from './index'

export default {
  title: 'atoms/MenuIconButton',
  argTypes: {
    onClick: {
      description: 'onClickイベントハンドラ',
    },
  },
} as ComponentMeta<typeof MenuIconButton>

const Template: ComponentStory<typeof MenuIconButton> = (args) => (
  <MenuIconButton {...args} />
)

export const IconButton = Template.bind({})
IconButton.args = {
  onClick: () => {
    // do nothing.
  },
}
