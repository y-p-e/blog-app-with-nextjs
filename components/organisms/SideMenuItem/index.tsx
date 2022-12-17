import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import NextLink from 'next/link'
const SideMenuItem = () => {
  return (
    <List>
      <NextLink href="/admin/posts">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="記事一覧" />
          </ListItemButton>
        </ListItem>
      </NextLink>
    </List>
  )
}

export default SideMenuItem
