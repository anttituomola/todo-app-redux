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
            <span onClick={() => dispatch(todoActions.filterTodos("all"))}>All</span>
            <span onClick={() => dispatch(todoActions.filterTodos("active"))}>Active</span>
            <span onClick={() => dispatch(todoActions.filterTodos("completed"))}>Completed</span>
        </span>
    </div>
  )
}

export default Filters