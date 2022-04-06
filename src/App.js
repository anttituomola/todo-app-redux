import './App.css'
import Input from './components/Input'
import TodosRender from './components/TodosRender'
import fetchData from './data/fetchData'

const App = () => {
  fetchData()
  return (
    <div className="App">
      <h1>Todo App with Redux - NOW UPDATED!</h1>
      <Input />
      <TodosRender />
    </div>
  );
}

export default App;
