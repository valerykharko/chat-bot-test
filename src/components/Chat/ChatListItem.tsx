import React from 'react'

import styles from './ChatListItem.module.scss'

import { IMessage, SenderEnum } from '@/interfaces/chat.ts'

interface IChatListItemProps {
  message: IMessage
}

const ChatListItem = ({ message }: IChatListItemProps) => {
  return (
    <div
      className={`${styles.container} ${message.sender.type === SenderEnum.USER ? styles.containerUser : ''}`}
    >
      <div
        className={`${styles.listItem} ${message.sender.type === SenderEnum.USER ? styles.listItemUser : styles.listItemBot}`}
      >
        <span className={styles.sender}>
          {message.sender.type} {message.sender?.email && message.sender?.email}
        </span>
        <span className={styles.message}>{message.text}</span>
      </div>
    </div>
  )
}

export default ChatListItem
