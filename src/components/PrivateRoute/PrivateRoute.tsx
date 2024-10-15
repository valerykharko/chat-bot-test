import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAdmin } from '@/utils/auth.ts'

const PrivateRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PrivateRoute
