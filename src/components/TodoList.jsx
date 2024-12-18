// components/TodoList.jsx
import styled from 'styled-components'
import { TodoItem } from './TodoItem'
import { EmptyState } from './EmptyState'

const ListContainer = styled.div`
  background: white;
  border-radius: 32px;
  padding: 24px;
  margin: 24px 0 40px 0;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TodoList = ({ todos }) => {
  return (
    <ListContainer> 
      {/* Show empty state */}
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <List>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </ListContainer>
  )
}
