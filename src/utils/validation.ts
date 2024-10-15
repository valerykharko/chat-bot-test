import { IFormData, IValidationErrors } from '@/interfaces/form'

export const validateInputs = (
  formData: IFormData,
  mode: 'singIn' | 'singUp'
): IValidationErrors => {
  const errors: IValidationErrors = {}

  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Invalid email address'
  }

  if (!formData.password || formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (mode === 'singUp') {
    if (!formData.name || formData.name.trim() === '') {
      errors.name = 'Name is required'
    }

    if (!formData.company || formData.company.trim() === '') {
      errors.company = 'Company is required'
    }
  }

  return errors
}
