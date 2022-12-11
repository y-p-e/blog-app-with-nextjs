import type {ApiContext} from '../../types/data'
import {fetcher} from '../../utils/index'

export type CreatePostParams = {
	title: string,
	text: string|undefined,
	status: string
}

const createPost = async (
  context: ApiContext,
  params: CreatePostParams,
): Promise<{ message: string }> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/post`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(params),
  })
}

export default createPost