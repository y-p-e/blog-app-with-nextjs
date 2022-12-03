import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LogoutIconButton from '../../atoms/LogoutIconButton/index'
import MenuIconButton from '../../atoms/MenuIconButton/index'

type HeaderProps = {
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
      >
        <AppBar position="static">
          <Toolbar>
            <Grid item xs={1}>
              {isShowMenuIcon && (
                <MenuIconButton onClick={menuIconButtonOnClick} />
              )}
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" component="div" align="center">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: 'right' }}>
              {isShowLogoutIcon && (
                <LogoutIconButton onClick={logoutIconButtonOnClick} />
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  )
}

export default Header
