import React, { useState } from 'react'
import AllTodos from './AllTodos';

const TodoCard = ({todo, deleteTodo, setOnUpDate, upDateTodo, handletask}) => {

    const [onMenu, setOnMenu] = useState(false);

    const handleCompleted = () => {
      const data = {
        completed: !todo.completed
      }
      upDateTodo('/todos', data, todo.id)
      handletask('/todos/true')
    };
    
    const handleDelete = () => { 
      deleteTodo('/todos', todo.id)
      handletask('/todos/true')
     }

    const handleUpDate = () => { 
      setOnUpDate(todo)
      handletask('/todos/true')
    }
  return (
    <div className="task__info">
          <span className="task__name">{todo.title}</span>
          <span className="task__actions">
            <span
              className="task__action--punt"
              onClick={() => setOnMenu(!onMenu)}
            >
              . . .
            </span>
            <button
              className={`task__action task__action--delete ${
                todo.completed ? "oncompleted" : ""
              }`}
              onClick={handleCompleted}
            >
              {todo.completed ? "✓" : ""}
            </button>
          </span>
          <span className={`task__list ${onMenu ? "onmenu" : ""} ${todo.completed ? 'true' : ''}`}>

            {
              todo.completed
              ?(
                <div className="task__item" onClick={handleDelete}>Eliminate</div>
              )

              :(
                <>
                  <div className="task__item" onClick={handleDelete}>Eliminate</div>
                  <div className="task__item" onClick={handleUpDate}>Update</div>
                </>
              )
            }
            
          </span>
        </div>
  )
}

export default TodoCard