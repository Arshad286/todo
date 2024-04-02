
import { Provider } from 'react-redux'
import './App.css'
import TaskInput from './Component/TaskInput'
import TaskList from './Component/TaskList'
import store from './redux/store'



function App() {
  
  return (
    <>
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
     
    </>
  )
}

export default App
