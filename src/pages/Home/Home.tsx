import React, { useEffect, useRef, useState } from 'react'

import { Box, IconButton, Stack, TextField } from '@mui/material'

import { ChatList } from '@/components'


import { IMessage, SenderEnum } from '@/interfaces/chat.ts'

import SendIcon from '@mui/icons-material/Send'

import styles from './Home.module.scss'

const Home = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState('')

  const chatRef = useRef<HTMLDivElement | null>(null)



  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          text: message,
          sender: { type: SenderEnum.USER, email: 'sss@gmail.com' },
        },
      ])
      setMessage('')

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: 'Bot response', sender: { type: SenderEnum.BOT } },
        ])
      }, 1000)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <Box className={styles.container}>
      <ChatList messages={messages} chatRef={chatRef} />

      <Stack direction="row" className={styles.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
          multiline
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Stack>

    </Box>
  )
}

export default Home
