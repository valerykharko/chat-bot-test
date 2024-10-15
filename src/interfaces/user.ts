export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUser {
  name: string
  company: string
  email: string
  role: UserRole
}
