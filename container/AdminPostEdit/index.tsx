import type {ApiContext} from '../../types/data'
import MarkdownEditor from '../../components/organisms/MarkdownEditor'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import createPost from '../../services/posts/create-post'
import PostStatusSwitch from '../../components/organisms/PostStatusSwitch'
import type { AdminPost } from '../../types/data'

type AdminPostEditContainerProps = {
	post: AdminPost
}

const context: ApiContext = {
	apiRootUrl: '/api/proxy',
}

const AdminPostEditContainer = (props: AdminPostEditContainerProps) => {
	const {post} = props
  const [title, setTitle] = useState(post.title)
  const [status, setStatus] = useState(post.status)
	const [text, setText] = useState<string | undefined>(post.text)

  const handleSubmitButtonClick = async () => {
    try {
      await createPost(context, {
        title: title,
        text: text,
        status: status
      })
			window.alert('保存しました')
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message)
      }
    }
  }

	return (
		<Stack spacing={5}>
			<TextField
				fullWidth
				label="タイトル"
				variant="outlined"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<MarkdownEditor text={text} setText={setText} />
			<Stack spacing={3} direction="row" justifyContent="flex-end">
				<PostStatusSwitch status={status} setStatus={setStatus} />
				<Button variant="contained" onClick={handleSubmitButtonClick}>
					保存
				</Button>
			</Stack>
		</Stack>
	)
}

export default AdminPostEditContainer