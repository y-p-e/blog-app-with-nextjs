import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlogCard from './index'

export default {
  title: 'organisms/BlogCard',
  argTypes: {
    ogTitle: {
      control: { type: 'string' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    ogUrl: {
      control: { type: 'string' },
      description: 'URL',
      table: {
        type: { summary: 'string' },
      },
    },
    ogSiteName: {
      control: { type: 'string' },
      description: 'サイト名',
      table: {
        type: { summary: 'string' },
      },
    },
    ogDescription: {
      control: { type: 'string' },
      description: '詳細',
      table: {
        type: { summary: 'string' },
      },
    },
    ogImage: {
      control: { type: 'string' },
      description: '画像パス',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof BlogCard>

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args}/>
)

export const FrontBlogCard = Template.bind({})
FrontBlogCard.args = {
  ogTitle: "ページタイトル",
  ogUrl: "https://www.google.com/",
  ogSiteName: "サイト名",
  ogDescription: "ページについての説明",
  ogImage: "/react.jpg",
}