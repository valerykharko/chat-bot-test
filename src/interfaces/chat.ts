export enum SenderEnum {
  USER = 'USER',
  BOT = 'BOT',
}

export interface IMessage {
  text: string
  sender: ISender
}

interface ISender {
  type: SenderEnum
  email?: string
}

export interface IConversationTree {
  question: string
  answers: string[]
}
