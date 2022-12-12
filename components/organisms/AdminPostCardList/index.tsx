import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import NextLink from 'next/link'
import type { AdminPost } from '../../../types/data'

type AdminPostCardListProps = {
  posts: AdminPost[]
}

const AdminPostCardList = (props: AdminPostCardListProps) => {
  const { posts } = props
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardHeader title="記事一覧" />
      <CardContent>
        <List>
          {posts.map((p) => (
            <NextLink
              key={p.postId}
              as={'/admin/post-edit/'}
              href={{ pathname: '/admin/post-edit', query: p }}
              passHref
            >
              <ListItem disablePadding divider={true}>
                <ListItemButton>
                  <ListItemText primary={p.title} />
                  <Chip label={p.status} color="primary" variant="outlined" />
                </ListItemButton>
              </ListItem>
            </NextLink>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default AdminPostCardList
