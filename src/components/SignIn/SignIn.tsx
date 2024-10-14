import React, { useState } from 'react'

import { Box, Button, TextField, Typography, Stack, Modal } from '@mui/material'

interface ISignUpProps {
  open: boolean
  onClose: () => void
}

export default function SignIn({ open, onClose }: ISignUpProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  console.log('open', open)

  const validateInputs = () => {
    let isValid = true

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true)
      isValid = false
    } else {
      setEmailError(false)
    }

    if (!password || password.length < 6) {
      setPasswordError(true)
      isValid = false
    } else {
      setPasswordError(false)
    }

    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateInputs()) {
      console.log('Email:', email)
      console.log('Password:', password)
      onClose()
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 300,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h6">Sing Up</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? 'Invalid email address' : ''}
          />
          <TextField
            sx={{ marginTop: 1 }}
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={
              passwordError ? 'Password must be at least 6 characters' : ''
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography variant="body2">Don't have an account?</Typography>
          <Button variant="text" onClick={() => {}}>
            Sign up
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
