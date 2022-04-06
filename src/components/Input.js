import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../features/todoSlice'


const Input = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const addTodo = () => {
            dispatch(todoActions.addTodo({
                id: Math.random(),
                text: inputValue,
                done: false,
                class: ""
            }))
            setInputValue("")
    }

  return (
    <div className='input'>
        <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue}/>
        <button onClick={() => addTodo()}>Add todo</button>
    </div>
  )
}

export default Input