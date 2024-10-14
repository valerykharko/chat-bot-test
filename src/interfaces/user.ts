enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

interface IUser {
  name: string
  organization: string
  email: string
  role: UserRole
}
