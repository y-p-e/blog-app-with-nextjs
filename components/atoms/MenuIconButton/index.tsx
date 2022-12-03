import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

type MenuIconButtonProps = {
  onClick: () => void
}

const MenuIconButton = (props: MenuIconButtonProps) => {
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
      <MenuIcon />
    </IconButton>
  )
}

export default MenuIconButton
