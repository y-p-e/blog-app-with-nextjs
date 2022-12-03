import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './index'

export default {
  title: 'organisms/Header',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    isShowMenuIcon: {
      control: { type: 'boolean' },
      description: 'メニューアイコン表示',
      table: {
        type: { summary: 'number' },
      },
    },
    isShowLogoutIcon: {
      control: { type: 'boolean' },
      description: 'ログアウトアイコン表示',
      table: {
        type: { summary: 'number' },
      },
    },
    menuIconButtonOnClick: {
      description: 'メニューアイコンボタンonClickイベントハンドラ',
      table: {
        type: { summary: 'number' },
      },
    },
    logoutIconButtonOnClick: {
      description: 'ログアウトアイコンボタンonClickイベントハンドラ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

// 管理画面用ヘッダー
export const BackOffice = Template.bind({})
BackOffice.args = {
  title: '管理画面',
  isShowMenuIcon: true,
  isShowLogoutIcon: true,
  menuIconButtonOnClick: () => {
    // do nothing.
  },
  logoutIconButtonOnClick: () => {
    // do nothing.
  },
}
