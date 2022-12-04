import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LogoutIconButton from '../../atoms/LogoutIconButton/index'
import MenuIconButton from '../../atoms/MenuIconButton/index'

export type HeaderProps = {
  isShowMenuIcon: boolean
  isShowLogoutIcon: boolean
  menuIconButtonOnClick: () => void
  logoutIconButtonOnClick: () => void
  title: string
}

const Header = (props: HeaderProps) => {
  const {
    title,
    isShowMenuIcon,
    isShowLogoutIcon,
    menuIconButtonOnClick,
    logoutIconButtonOnClick,
  } = props
  return (
    <AppBar position="fixed">
      <Toolbar>
        {isShowMenuIcon && <MenuIconButton onClick={menuIconButtonOnClick} />}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {isShowLogoutIcon && (
          <LogoutIconButton onClick={logoutIconButtonOnClick} />
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
