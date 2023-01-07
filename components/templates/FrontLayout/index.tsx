import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useState, ReactNode } from 'react'

import FrontHeader from '../../organisms/FrontHeader/index'
import theme from '../../../theme/theme'
import Container from '@mui/material/Container';
import Footer from '../../organisms/Footer'

const drawerWidth = 240

type FrontLayoutProps = {
  children: ReactNode
}

const FrontLayout = (props: FrontLayoutProps) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <FrontHeader />
        <Container maxWidth="lg">
          <Box sx={{ height: '200px' }} />
          {children}
        </Container>
      </Box>
      <br />
      <Footer />
    </ThemeProvider>
  )
}

export default FrontLayout
