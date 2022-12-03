import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideMenu from './index'

export default {
  title: 'organisms/SideMenu',
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'サイドメニュー開閉フラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof SideMenu>

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
)

export const MenuOpen = Template.bind({})
MenuOpen.args = { isOpen: true }
