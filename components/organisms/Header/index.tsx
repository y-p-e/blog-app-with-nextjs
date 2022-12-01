import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

type HeaderProps = {
  title: string
}

const Header = (props: HeaderProps) => {
  const { title } = props
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
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" component="div" align="center">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: 'right' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <LogoutIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  )
}

export default Header
