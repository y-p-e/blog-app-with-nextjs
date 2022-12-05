import useSWR from 'swr'
import type {AdminPost, ApiContext} from '../../types/data'
import {fetcher} from '../../utils/index'

export type UseAdminPosts = {
	posts: AdminPost[]
	isLoading: boolean
	isError: boolean
}

const getAdminPosts = (
	context: ApiContext,
): UseAdminPosts => {
	const {data, error} = useSWR<AdminPost[]>(
		`${context.apiRootUrl.replace(/\/$/g, '')}/posts`, fetcher
	)
	return {
		posts: data ?? [],
		isLoading: !error && !data,
		isError: !!error,

	}
}

export default getAdminPosts