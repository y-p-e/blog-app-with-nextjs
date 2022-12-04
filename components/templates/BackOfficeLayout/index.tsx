import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/material/styles'
import { useState, ReactNode } from 'react'

import DrawerHeader from '../../organisms/DrawerHeader/index'
import Header, { HeaderProps } from '../../organisms/Header/index'
import SideMenu from '../../organisms/SideMenu/index'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

interface AppBarProps extends HeaderProps {
  open?: boolean
}

const AppBar = styled(Header, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type BackOfficeLayoutProps = {
  children: ReactNode
}

const BackOfficeLayout = (props: BackOfficeLayoutProps) => {
  const { children } = props
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        isShowMenuIcon={!open}
        isShowLogoutIcon={true}
        menuIconButtonOnClick={handleDrawerOpen}
        logoutIconButtonOnClick={() => {
          // ログアウト機能を実装
        }}
        title="管理画面"
        open={open}
      />
      <SideMenu
        showSideMenu={open}
        drawerWidth={drawerWidth}
        chevronIconButtonOnClick={handleDrawerClose}
      />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}

export default BackOfficeLayout
