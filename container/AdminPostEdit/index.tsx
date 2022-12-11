import getAdminPosts from '../../services/posts/get-admin-posts'
import type {ApiContext} from '../../types/data'
import MarkdownEditor from '../../components/organisms/MarkdownEditor'

const context: ApiContext = {
	apiRootUrl: '/api/proxy',
}

const AdminPostEditContainer = () => {
	// const {posts} = getAdminPosts(context)
	return (
		<MarkdownEditor />
	)
}

export default AdminPostEditContainer