import { useEffect, useState } from 'react'
import './App.css'
import AllTodos from './components/AllTodos'
import NewTodo from './components/NewTodo'
import useFetch from './hooks/useFetch'

function App() {
  const [onGet, setOnGet] = useState(false)
  

  const [todos, allTodos, createTodo, deleteTodo, upDateTodo] = useFetch(onGet)

  const [onUpDate, setOnUpDate] = useState()

  useEffect(() => {
    allTodos('/todos/false')
  }, [])
  
  
  const handletask = (route) => { 
    allTodos(route)
  }
  
  return (
    <div className='app'>
      <header className='app__header'>
        <span className='app__header--title'>Todo list</span>
      </header>

      <section className='app__body'>
        <NewTodo 
        createTodo={createTodo}
        onUpDate={onUpDate}
        upDateTodo={upDateTodo}
        setOnUpDate={setOnUpDate}
        />
        <AllTodos
        todos={todos}
        deleteTodo={deleteTodo}
        setOnUpDate={setOnUpDate}
        setOnGet={setOnGet}
        onGet={onGet}
        upDateTodo={upDateTodo}
        handletask={handletask}
         />
      </section>
    </div>
  )
}

export default App
