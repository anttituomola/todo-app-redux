import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {todoActions} from '../features/todoSlice'

const Filters = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const itemsNotDoneLeft = state.todos.todos.filter(todo => !todo.done).length

  return (
    <div className='filterContainer'>
        <span className='left'>{itemsNotDoneLeft} left</span>
        <span className='filters'>
            <span className={state.todos.filterMode === "all" ? "selected" : ""} onClick={() => dispatch(todoActions.filterTodos("all"))}>All</span>
            <span className={state.todos.filterMode === "active" ? "selected" : ""} onClick={() => dispatch(todoActions.filterTodos("active"))}>Active</span>
            <span className={state.todos.filterMode === "completed" ? "selected" : ""} onClick={() => dispatch(todoActions.filterTodos("completed"))}>Completed</span>
        </span>
    </div>
  )
}

export default Filters