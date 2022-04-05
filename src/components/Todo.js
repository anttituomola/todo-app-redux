import React from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../features/todoSlice'

const Todo = (props) => {
    const dispatch = useDispatch()

  return (
    <div>
        <input type="checkbox" checked={props.todo.done} onChange={() => dispatch(todoActions.toggleTodo(props.todo.id))}/>
        <span className={props.todo.done ? "done" : ""}>{props.todo.text}</span>
        <button onClick={() => dispatch(todoActions.removeTodo(props.todo.id))}>Delete</button>   
    </div>
  )
}

export default Todo