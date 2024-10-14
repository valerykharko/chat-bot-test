import React from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'

import { Header } from '../index.ts'

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        paddingX: 36,
        backgroundColor: 'var(--gray-300)',
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: 'var(--white)',
          padding: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
