export interface IFormData {
  name?: string
  company?: string
  email: string
  password: string
}

export type IValidationErrors = Partial<Record<keyof IFormData, string>>
