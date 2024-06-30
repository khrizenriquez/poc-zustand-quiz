import { useState } from 'react'
import './App.css'
import { Container, Stack, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Container maxWidth='sm'>
        <Typography variant='h2' component='h1'>
          <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
            JS Quiz
          </Stack>
        </Typography>
      </Container>
    </main>
  )
}

export default App
