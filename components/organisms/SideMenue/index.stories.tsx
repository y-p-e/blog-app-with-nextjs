import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideMenue from './index'

export default {
  title: 'organisms/SideMenue',
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'サイドメニュー開閉フラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof SideMenue>

const Template: ComponentStory<typeof SideMenue> = (args) => (
  <SideMenue {...args} />
)

export const MenuOpen = Template.bind({})
MenuOpen.args = { isOpen: true }
