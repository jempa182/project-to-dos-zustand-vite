// components/TodoInput.tsx
import styled from 'styled-components'
import { useState, FormEvent, ChangeEvent } from 'react'
import { useTodoStore } from '../stores/TodoStore'

const InputWrapper = styled.form`
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 20px 80px 20px 24px; /* Extra padding på höger sida för knappen */
  background: rgb(171,255,45);
  border: none;
  border-radius: 50px;
  font-size: 18px;
  color: #000;
  transition: all 0.3s ease;

  &::placeholder {
    color: #333;
  }

  &:focus {
    outline: none;
  }
`

const SubmitButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: #3E0B9D;
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2D0870;
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: translateY(-50%);
  }
`

export const TodoInput = () => {
  const [input, setInput] = useState('') // Local state for input field
  const addTodo = useTodoStore(state => state.addTodo) // ToDo from Zustand

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Stops page refresh on submit
    if (input.trim()) { // Check if input isn't just spaces
      addTodo(input.trim())
      setInput('') // Clear input after adding a task
    }
  }

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        placeholder="Add a task.."
        aria-label="New todo input"
      />
      <SubmitButton 
        type="submit" 
        disabled={!input.trim()}
        aria-label="Add task"
      >
        Add
      </SubmitButton>
    </InputWrapper>
  )
}