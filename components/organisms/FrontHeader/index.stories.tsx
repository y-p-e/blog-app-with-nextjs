import { ComponentStory, ComponentMeta } from '@storybook/react'
import FrontHeader from './index'

export default {
  title: 'organisms/FrontHeader',
} as ComponentMeta<typeof FrontHeader>

const Template: ComponentStory<typeof FrontHeader> = () => <FrontHeader />

// フロント画面用ヘッダー
export const Front = Template.bind({})
