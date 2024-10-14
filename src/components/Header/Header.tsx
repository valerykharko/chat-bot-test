import React, { useState } from 'react'
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from '@mui/material'

import { SignIn } from '@/components'

import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpenModal = () => {
    setOpen(true)
    console.log('here')
  }
  const handleCloseModal = () => setOpen(false)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ background: 'var(--gray-800)' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat bot
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              type="button"
              sx={{ textTransform: 'none' }}
              onClick={handleOpenModal}
            >
              <Typography variant="h6" sx={{ color: 'var(--white)' }}>
                Sing in
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <SignIn open={open} onClose={handleCloseModal} />
    </Box>
  )
}
