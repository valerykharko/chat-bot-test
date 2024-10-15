import { IUser, UserRole } from '@/interfaces/user.ts'

export const isAuth = (): boolean => {
  const token = localStorage.getItem('token')

  if (!token) {
    return false
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))

    if (payload.exp && Date.now() >= payload.exp * 1000) {
      localStorage.removeItem('token')
      return false
    }

    return true
  } catch (error) {
    console.error('Invalid token:', error)
    return false
  }
}

export const getUserData = (): IUser => {
  const userData = localStorage.getItem('userData')

  if (!userData) {
    return
  }

  return JSON.parse(userData)
}

export const isAdmin = () => {
  const userData = localStorage.getItem('userData')

  if (!userData) {
    return
  }

  const parsedUserData = JSON.parse(userData)

  return parsedUserData.role === UserRole.ADMIN
}
