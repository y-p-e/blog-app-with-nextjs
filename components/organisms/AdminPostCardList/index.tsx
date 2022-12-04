import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

type AdminPost = {
  postId: number
  title: string
  status: string
}

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
            <ListItem key={p.postId} disablePadding divider={true}>
              <ListItemButton>
                <ListItemText primary={p.title} />
                <Chip label={p.status} color="primary" variant="outlined" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default AdminPostCardList
