import { useEffect, useState } from 'react'
import './App.css'
import AllTodos from './components/AllTodos'
import NewTodo from './components/NewTodo'
import useFetch from './hooks/useFetch'

function App() {

  const [todos, allTodos, createTodo, deleteTodo, upDateTodo] = useFetch()

  const [onUpDate, setOnUpDate] = useState()
  const [onGet, setOnGet] = useState(false)

  useEffect(() => {
    allTodos('/todos/false')
  }, [])
  

  // useEffect(() => {
  //   if (onGet) {
  //       allTodos('/todos/false')
  //       setOnGet(false)
  //     } 
  // }, [onGet])
  
  const handletask = (route) => { 
    allTodos(route)
    console.log(todos)
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
        onGet={onGet}
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
