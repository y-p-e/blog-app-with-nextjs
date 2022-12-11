import { ComponentStory, ComponentMeta } from '@storybook/react'
import MarkdownEditor from './index'

export default {
  title: 'organisms/MarkdownEditor',
  argTypes: {
    text: {
      control: { type: 'string' },
      description: 'マークダウン',
      table: {
        type: { summary: 'string' },
      },
    },
    setText: {
      description: 'チェンジイベントハンドラ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof MarkdownEditor>

const Template: ComponentStory<typeof MarkdownEditor> = (args) => (
  <MarkdownEditor {...args} />
)

export const Editor = Template.bind({})
Editor.args = {
  text: 'test',
  setText: () => {
    // do nothing.
  },
}
