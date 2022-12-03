import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'

type LogoutIconButtonProps = {
  onClick: () => void
}

const LogoutIconButton = (props: LogoutIconButtonProps) => {
  const { onClick } = props
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onClick}
      sx={{ mr: 2 }}
    >
      <LogoutIcon />
    </IconButton>
  )
}

export default LogoutIconButton
