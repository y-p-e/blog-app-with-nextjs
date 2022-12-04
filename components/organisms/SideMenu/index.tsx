import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import DrawerHeader from '../DrawerHeader/index'
import SideMenuItem from '../SideMenuItem/index'

type SideMenuProps = {
  showSideMenu: boolean
  drawerWidth: number
  chevronIconButtonOnClick: () => void
}

const SideMenu = (props: SideMenuProps) => {
  const { showSideMenu, drawerWidth, chevronIconButtonOnClick } = props
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={showSideMenu}
    >
      <DrawerHeader>
        <IconButton onClick={chevronIconButtonOnClick}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <SideMenuItem />
    </Drawer>
  )
}

export default SideMenu
