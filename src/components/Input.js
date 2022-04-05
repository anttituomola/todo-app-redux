import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoActions } from '../features/todoSlice'


const Input = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const addTodo = () => {
            dispatch(todoActions.addTodo({
                id: Math.random(),
                text: state.todos.inputValue,
                done: false,
                class: ""
            }))
            dispatch(todoActions.clearInputValue())
    }

  return (
    <div className='input'>
        <input type="text" onChange={(event) => dispatch(todoActions.setInputValue(event.target.value))} value={state.todos.inputValue}/>
        <button onClick={() => addTodo()}>Add todo</button>
    </div>
  )
}

export default Input