import { todoActions } from '../features/todoSlice'

// Fetch initial state from API
const useFetchData = () => {
    return async (dispatch, getState) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        const todos = await data.json()

        // Get randomly selected todos
        const randomNumber = Math.floor(Math.random() * 15) + 1
        const endNumber = randomNumber + 5
        const initialTodos = todos.slice(randomNumber, endNumber)
        dispatch(todoActions.setInitialState({
            todos: initialTodos.map(todo => {
                return {
                    id: todo.id,
                    text: todo.title,
                    done: todo.completed,
                    class: "todo"
                }
            })
        }))
    }
}
export default useFetchData