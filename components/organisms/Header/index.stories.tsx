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
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

// 管理画面用ヘッダー
export const BackOffice = Template.bind({})
BackOffice.args = {
  title: '管理画面',
}
