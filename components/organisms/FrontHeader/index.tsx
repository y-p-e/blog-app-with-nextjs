import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const FrontHeader = () => {
  return (
    <AppBar position='absolute' sx={{ height: '164px'}} color='inherit' elevation={0}>
      <Toolbar>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
          <Grid item xs={12}><Box sx={{ height: '50px' }} /></Grid>
          <Grid item xs={12}>
            <WorkspacesIcon fontSize="large" color='primary' sx={{ mr: 1 , ml: 5}} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Web-Lab
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 5,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              フリーランスWebエンジニアが気になったことを研究して発信
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default FrontHeader
