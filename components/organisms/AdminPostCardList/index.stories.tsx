import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdminPostCardList from './index'

export default {
  title: 'organisms/AdminPostCardList',
} as ComponentMeta<typeof AdminPostCardList>

const post1 = {
  postId: 1,
  title: '記事一覧画面について',
  status: '公開中',
}
const post2 = {
  postId: 2,
  title: '記事一覧詳細画面について',
  status: '一時保存',
}
const post3 = {
  postId: 3,
  title: 'ログイン画面について',
  status: '非公開',
}
const posts = [post1, post2, post3]

const Template: ComponentStory<typeof AdminPostCardList> = () => (
  <AdminPostCardList posts={posts} />
)

export const CardList = Template.bind({})
