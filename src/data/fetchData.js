import { useDispatch } from 'react-redux'
import { todoActions } from '../features/todoSlice'

// Fetch initial state from API
const useFetchData = async () => {
    const dispatch = useDispatch()
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    const todos = await data.json()
    const initialTodos = todos.slice(0, 5)
    console.log(initialTodos)
    dispatch(todoActions.setInitialState({ todos: initialTodos.map(todo => {
        return {
            id: todo.id,
            text: todo.title,
            done: todo.completed,
            class: "todo"
        }
    }) }))
}

export default useFetchData