import { ComponentStory, ComponentMeta } from '@storybook/react'
import SideMenu from './index'

export default {
  title: 'organisms/SideMenu',
  argTypes: {
    showSideMenu: {
      control: { type: 'boolean' },
      description: 'サイドメニュー開閉フラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    drawerWidth: {
      control: { type: 'number' },
      description: 'サイドメニュー幅',
      table: {
        type: { summary: 'number' },
      },
    },
    chevronIconButtonOnClick: {
      description: '矢印アイコンボタンonClickイベントハンドラ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof SideMenu>

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
)

export const MenuOpen = Template.bind({})
MenuOpen.args = {
  showSideMenu: true,
  drawerWidth: 240,
  chevronIconButtonOnClick: () => {
    // do nothing.
  },
}
