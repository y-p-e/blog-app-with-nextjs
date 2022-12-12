import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import BackOfficeLayout from '../../components/templates/BackOfficeLayout/index'
import AdminPostEditContainer from '../../container/AdminPostEdit/index'
import type { AdminPost } from '../../types/data'

const AdminPosts: NextPage = () => {
  const router = useRouter()
  const query = router.query
  const postId: number =
    query.postId && !Array.isArray(query.postId) ? Number(query.postId) : 0
  const title: string =
    query.title && !Array.isArray(query.title) ? query.title : ''
  const text: string =
    query.text && !Array.isArray(query.text) ? query.text : ''
  const status: string =
    query.status && !Array.isArray(query.status) ? query.status : '非公開'

  const post: AdminPost = {
    postId: postId,
    title: title,
    text: text,
    status: status,
  }
  console.log(post)
  return (
    <BackOfficeLayout>
      <AdminPostEditContainer post={post} />
    </BackOfficeLayout>
  )
}

export default AdminPosts
