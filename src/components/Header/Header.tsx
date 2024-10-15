import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  IconButton,
} from '@mui/material'

import { SignIn } from '@/components'

import { getUserData, isAuth } from '@/utils/auth.ts'

import { UserRole } from '@/interfaces/user.ts'

import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'

import styles from './Header.module.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [menuEl, setMenuEl] = useState<null | HTMLElement>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isAuthorized = isAuth()
  const userData = getUserData()

  useEffect(() => {
    if (!isAuthorized) setOpen(true)
    else setOpen(false)
  }, [isAuthorized])

  const handleCloseModal = () => {
    if (!isAuthorized) setOpen(true)
    else setOpen(false)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuEl(null)
  }

  const handleAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
    setAnchorEl(null)
  }

  return (
    <Box className={styles.container}>
      <AppBar position="static">
        <Toolbar>
          {userData && userData?.role === UserRole.ADMIN && (
            <div className={styles.menu}>
              <IconButton onClick={handleMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuEl}
                open={Boolean(menuEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link className={styles.link} to="settings">
                    Settings
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat bot
          </Typography>
          {isAuthorized && userData && (
            <div className={styles.account}>
              <button className={styles.btn} onClick={handleAccount}>
                <AccountCircle />
                <div className={styles.user}>
                  <span>
                    {userData?.name} ({userData?.company})
                  </span>
                  <span className={styles.email}>{userData?.email}</span>
                </div>
              </button>

              <Menu
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <SignIn open={open} onClose={handleCloseModal} />
    </Box>
  )
}
