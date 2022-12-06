import AdminPostCardList from '../../components/organisms/AdminPostCardList/index'
import getAdminPosts from '../../services/posts/get-admin-posts'
import type {ApiContext} from '../../types/data'

const context: ApiContext = {
	apiRootUrl: '/api/proxy',
}

const AdminPostCardListContainer = () => {
	const {posts} = getAdminPosts(context)
	return (
		<AdminPostCardList posts={posts}/>
	)
}

export default AdminPostCardListContainer