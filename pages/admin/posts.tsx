import type { NextPage } from 'next'
import BackOfficeLayout from '../../components/templates/BackOfficeLayout/index'
import AdminPostCardListContainer from '../../container/AdminPostCardList/index'

const AdminPosts: NextPage = () => {
  return (
    <BackOfficeLayout>
      <AdminPostCardListContainer />
    </BackOfficeLayout>
  )
}

export default AdminPosts
