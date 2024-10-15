import React, { useEffect, useRef, useState } from 'react'

import { IConversationTree } from '@/interfaces/chat.ts'

import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

import styles from './Settings.module.scss'

const mockData: IConversationTree[] = [
  {
    question: 'Hello! How can I help you?',
    answers: [
      'I need help with my account',
      'How to order a product?',
      "What's new?",
      "What's new?",
      "What's new?",
      "What's new?",
    ],
  },
  {
    question: 'Do you want to recover access to your account?',
    answers: ['Yes', 'No, everything is fine'],
  },
  {
    question: 'Which recovery method would you prefer?',
    answers: ['By email', 'Via SMS'],
  },
  {
    question: 'Please enter your email for recovery.',
    answers: [],
  },
  {
    question:
      'Your email has been successfully verified! How can I assist you further?',
    answers: ['I want to change settings', 'I need help with my order'],
  },
  {
    question: 'Which product are you interested in?',
    answers: ['Phone', 'Laptop', 'Headphones'],
  },
  {
    question: 'A new product is on sale! Which model are you interested in?',
    answers: ['iPhone 14', 'MacBook Pro 16"'],
  },
  {
    question: 'Thank you for your inquiry. How can I assist you further?',
    answers: ["No, I'm good", 'I have more questions'],
  },
]

const Settings = () => {
  const [conversationTrees, setConversationTrees] =
    useState<IConversationTree[]>(mockData)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [editAnswerIndex, setEditAnswerIndex] = useState<number | null>(null)
  const [editQuestion, setEditQuestion] = useState('')
  const [editAnswers, setEditAnswers] = useState<string[]>([])

  const addConversation = () => {
    const newConversation = {
      question: 'New question?',
      answers: ['New answer 1', 'New answer 2'],
    }
    setConversationTrees((prevConversations) => [
      newConversation,
      ...prevConversations,
    ])
  }

  const handleEdit = (index: number) => {
    setEditIndex(index)
    setEditQuestion(conversationTrees[index].question)
    setEditAnswers([...conversationTrees[index].answers])
  }

  const handleSave = (index: number) => {
    const updatedConversations = [...conversationTrees]
    updatedConversations[index] = {
      question: editQuestion,
      answers: editAnswers,
    }
    setConversationTrees(updatedConversations)
    setEditIndex(null)
  }

  const handleAnswerChange = (value: string, idx: number) => {
    const updatedAnswers = [...editAnswers]
    updatedAnswers[idx] = value
    setEditAnswers(updatedAnswers)
  }

  const handleEditAnswer = (questionIndex: number, answerIndex: number) => {
    setEditIndex(questionIndex)
    setEditAnswerIndex(answerIndex)
    setEditAnswers([...conversationTrees[questionIndex].answers])
  }

  const handleSaveAnswer = (questionIndex: number, answerIndex: number) => {
    const updatedConversations = [...conversationTrees]
    updatedConversations[questionIndex].answers[answerIndex] =
      editAnswers[answerIndex]
    setConversationTrees(updatedConversations)
    setEditAnswerIndex(null)
    setEditIndex(null)
  }

  return (
    <div className={styles.container}>
      <h3>Questions</h3>

      <button className={styles.addMore} onClick={addConversation}>
        <AddIcon />
        <span>Add one more conversation</span>
      </button>

      <div className={styles.conversationTree}>
        {conversationTrees.map((item, questionIndex) => (
          <div key={questionIndex} className={styles.conversation}>
            <div className={styles.questionBlock}>
              <div className={styles.question}>
                <div className={styles.edit}>
                  {editIndex === questionIndex && editAnswerIndex === null ? (
                    <SaveIcon onClick={() => handleSave(questionIndex)} />
                  ) : (
                    <EditIcon onClick={() => handleEdit(questionIndex)} />
                  )}
                </div>
                <div className={styles.questionText}>
                  {editIndex === questionIndex && editAnswerIndex === null ? (
                    <textarea
                      value={editQuestion}
                      onChange={(e) => setEditQuestion(e.target.value)}
                      rows={5}
                    />
                  ) : (
                    <span>{item.question}</span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.answers}>
              {[...item.answers, ...Array(9 - item.answers.length).fill('')]
                .slice(0, 9)
                .map((answer, answerIndex) => (
                  <div key={answerIndex} className={styles.answer}>
                    {editIndex === questionIndex &&
                    editAnswerIndex === answerIndex ? (
                      <>
                        <div className={styles.edit}>
                          <SaveIcon
                            onClick={() =>
                              handleSaveAnswer(questionIndex, answerIndex)
                            }
                          />
                        </div>
                        <textarea
                          value={editAnswers[answerIndex] || ''}
                          onChange={(e) =>
                            handleAnswerChange(e.target.value, answerIndex)
                          }
                        />
                      </>
                    ) : answer ? (
                      <>
                        <div className={styles.edit}>
                          <EditIcon
                            onClick={() =>
                              handleEditAnswer(questionIndex, answerIndex)
                            }
                          />
                        </div>
                        <span>{answer}</span>
                      </>
                    ) : (
                      <button
                        className={styles.add}
                        onClick={() =>
                          handleEditAnswer(questionIndex, answerIndex)
                        }
                      >
                        <AddIcon />
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
