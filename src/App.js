import './App.css'
import Input from './components/Input'
import TodosRender from './components/TodosRender'

function App() {
  return (
    <div className="App">
      <h1>Todo App with Redux</h1>
      <Input />
      <TodosRender />
    </div>
  );
}

export default App;
