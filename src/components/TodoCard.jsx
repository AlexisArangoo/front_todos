import React, { useState } from 'react'
import './styles/TodoCard.css'

const TodoCard = ({todo, deleteTodo, setOnUpDate, upDateTodo}) => {

  const [onMenu, setOnMenu] = useState(false);
  const [onModalTask, setOnModalTask] = useState(false)

    const handleCompleted = (e) => {
      e.stopPropagation()
      const data = {
        completed: !todo.completed
      }
      upDateTodo('/todos', data, todo.id)
    };
    
    const handleDelete = (e) => { 
      e.stopPropagation()
      deleteTodo('/todos', todo.id)
     }

    const handleUpDate = (e) => { 
      e.stopPropagation()
      setOnUpDate(todo)
    }

    const handlemodal = (e) => { 
      e.stopPropagation()
      setOnModalTask(false)
     }

    const handleMenu = (e) => { 
      e.stopPropagation()
      setOnMenu(!onMenu)
     }
  return (
    <div className="task__info" onClick={() => setOnModalTask(true)}>
          <span className="task__name">{todo.title}</span>
          <span className="task__actions">
            <span
              className="task__action--punt"
              onClick={handleMenu}
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
          <div className={`task__container__modal ${onModalTask ? 'onmodaltask' : ''}`} onClick={handlemodal}>
            <section className='task__modal' onClick={e => e.stopPropagation()}>
              <h2 className='task__modal__title'>{todo.title}</h2>

              <article className='task__modal__description'>
                {todo.description}
              </article>
            </section>
          </div>
        </div>
  )
}

export default TodoCard