import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: [],
        filterMode: "all"
    },

    reducers: {
        setInitialState: (state, action) => {
            state.todos = action.payload.todos
            state.filterMode = "all"
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
   
        filterTodos: (state, action) => {
            state.filterMode = action.payload
        },
    }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer
