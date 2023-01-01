import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostToc from './index'

const tocString = `
<ul>
  <li><a href="#%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB-1">プロジェクトの作成 1</a>
    <ul>
      <li><a href="#nextjs-%E3%81%AE%E6%BA%96%E5%82%99">プロジェクトの作成 1-1</a></li>
      <li><a href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90">プロジェクトの作成 1-2</a></li>
    </ul>
  </li>
  <li><a href="#%E8%A8%98%E4%BA%8B%E4%B8%80%E8%A6%A7">プロジェクトの作成 2</a>
    <ul>
    <li><a href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90-1">プロジェクトの作成 2-1</a>
      <ul>
      <li><a href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90-2">プロジェクトの作成 2-1-1</a></li>
      <li><a href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90-3">プロジェクトの作成 2-1-2</a></li>
      </ul>
    </li>
    <li><a href="#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90-4">プロジェクトの作成 2-2</a></li>
    </ul>
  </li>
</ul>
`

export default {
  title: 'organisms/PostToc',
  argTypes: {
    tocString: {
      control: { type: 'string' },
      description: '目次',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof PostToc>

const Template: ComponentStory<typeof PostToc> = (args) => (
  <PostToc {...args}/>
)

export const FrontPostToc = Template.bind({})
FrontPostToc.args = {
  tocString: tocString,
}

