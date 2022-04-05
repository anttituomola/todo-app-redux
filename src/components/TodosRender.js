import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import Filters from './Filters'

const TodosRender = () => {
  const todos = useSelector(state => state.todos.todos)
  const filterMode = useSelector(state => state.todos.filterMode)

  // Filter todos based on filterMode
  const filteredTodos = todos.filter(todo => {
    if (filterMode === 'all') {
      return true
    } else if (filterMode === 'active') {
      return !todo.done
    } else if (filterMode === 'completed') {
      return todo.done
    }
    return filteredTodos
  })

  const todosRender = filteredTodos.map(todo => {
    return <Todo todo={todo} key={todo.id} className={todo.class}/>
  })

  return (
    <div className="todosRender">
      <div>{todosRender}</div>
      <div><Filters /></div>
    </div>
  )
}

export default TodosRender