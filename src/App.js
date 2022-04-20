import './App.css'
import Input from './components/Input'
import TodosRender from './components/TodosRender'
import fetchData from './data/fetchData'
import {useDispatch} from "react-redux"
import {useEffect} from 'react'
import timeout from './data/doSomething'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
    dispatch(timeout())
  })
    	

  return (
    <div className="App">
      <h1>Todo App with Redux</h1>
      <Input />
      <TodosRender />
    </div>
  );
}

export default App;
