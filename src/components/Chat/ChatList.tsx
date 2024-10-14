import React from 'react'

import ChatListItem from './ChatListItem.tsx'

import { IMessage } from '@/interfaces/chat.ts'

import styles from './ChatList.module.scss'

interface IChatListProps {
  messages: IMessage[]
  chatRef: React.RefObject<HTMLDivElement>
}

const ChatList = ({ messages, chatRef }: IChatListProps) => {
  console.log('messages', messages)

  return (
    <div ref={chatRef} className={styles.chatList}>
      {messages.map((message, index) => (
        <ChatListItem key={index} message={message} />
      ))}
    </div>
  )
}

export default ChatList
