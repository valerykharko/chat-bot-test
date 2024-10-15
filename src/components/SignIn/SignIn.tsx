import React, { useState } from 'react'

import { Box, Button, TextField, Typography, Stack, Modal } from '@mui/material'

import { signInRequest } from '@/api/requests/auth.ts'

import { validateInputs } from '@/utils/validation.ts'

import { IFormData, IValidationErrors } from '@/interfaces/form.ts'

import styles from './SignIn.module.scss'

interface ISignUpProps {
  open: boolean
  onClose: () => void
}

export default function SignIn({ open, onClose }: ISignUpProps) {
  const [mode, setMode] = useState<'singIn' | 'singUp'>('singIn')
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    company: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<IValidationErrors>({
    name: '',
    company: '',
    email: '',
    password: '',
  })

  const onChangeMode = () => {
    setMode((prevMode) => (prevMode === 'singUp' ? 'singIn' : 'singUp'))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateInputs(formData, mode)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      try {
        // const { data } = await signInRequest(formData.email, formData.password)
        // localStorage.setItem('token', data.token)
        // localStorage.setItem('userData', data.user)
      } catch (e) {
        console.log(e)
      } finally {
        onClose()
      }
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles.container}>
        <Typography variant="h6">
          {mode === 'singIn' ? 'Sing In' : 'Sing Up'}
        </Typography>

        <form onSubmit={handleSubmit}>
          {mode === 'singUp' && (
            <>
              <TextField
                className={styles.input}
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                className={styles.input}
                label="Company"
                variant="outlined"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                error={!!errors.company}
                helperText={errors.company}
              />
            </>
          )}
          <TextField
            className={styles.input}
            label="Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            className={styles.input}
            label="Password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />

          <Button
            className={styles.submitBtn}
            type="submit"
            variant="contained"
          >
            {mode === 'singIn' ? 'Sing In' : 'Sing Up'}
          </Button>
        </form>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography variant="body2">
            {mode === 'singIn'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </Typography>
          <Button variant="text" onClick={onChangeMode}>
            {mode === 'singIn' ? 'Sing Up' : 'Sing In'}
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
