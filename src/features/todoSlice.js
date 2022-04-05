import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [],
        inputValue: "",
        filterMode: "all"
    },

    reducers: {
        setInitialState: (state, action) => {
            state.todos = action.payload.todos
            state.filterMode = "all"
            state.inputValue = ""
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.done = !todo.done
                }
                return todo
            })
        },
        setInputValue: (state, action) => {
            state.inputValue = action.payload
        },
        clearInputValue: state => {
            state.inputValue = ""
        },
        filterTodos: (state, action) => {
            state.filterMode = action.payload
        },
    }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer
