import React from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../features/todoSlice'

const Todo = (props) => {
    const dispatch = useDispatch()

    // Generate icon URLs
    const iconName = props.todo.text.split(" ", 2)
    const iconNameString = iconName.length === 2 ? "https://ui-avatars.com/api/?size=32&name=" + iconName[0] + "+" + iconName[1] : "https://ui-avatars.com/api/?size=32&name=" + iconName[0]

  return (
    <div className='todoItem'>
      <img src={iconNameString} alt=""/>
        <input type="checkbox" checked={props.todo.done} onChange={() => dispatch(todoActions.toggleTodo(props.todo.id))}/>
        <span className={props.todo.done ? "done" : ""}>{props.todo.text}</span>
        <button className='button' onClick={() => dispatch(todoActions.removeTodo(props.todo.id))}>Delete</button>   
    </div>
  )
}

export default Todo