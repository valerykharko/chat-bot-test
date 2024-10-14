import React from 'react'

import { Box, Typography, Button } from '@mui/material'

import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '10rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </Typography>
      <Button variant="contained" component={Link} to="/" color="primary">
        Return to home page
      </Button>
    </Box>
  )
}

export default NotFound
