import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../index.ts'

import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
