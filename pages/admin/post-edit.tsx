import type { NextPage } from 'next'
import BackOfficeLayout from '../../components/templates/BackOfficeLayout/index'
import AdminPostEditContainer from '../../container/AdminPostEdit/index'

const AdminPosts: NextPage = () => {
  return (
    <BackOfficeLayout>
      <AdminPostEditContainer />
    </BackOfficeLayout>
  )
}

export default AdminPosts
