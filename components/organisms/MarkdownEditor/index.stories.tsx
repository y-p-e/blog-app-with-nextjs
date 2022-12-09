import { ComponentStory, ComponentMeta } from '@storybook/react'
import MarkdownEditor from './index'

export default {
  title: 'organisms/MarkdownEditor',
} as ComponentMeta<typeof MarkdownEditor>

const Template: ComponentStory<typeof MarkdownEditor> = () => (
  <MarkdownEditor />
)

export const Editor = Template.bind({})
