import React, { useState } from "react";
import "./styles/AllTodos.css";
import TodoCard from "./TodoCard";

const AllTodos = ({ todos, deleteTodo, setOnUpDate, setOnGet, onGet, upDateTodo, handletask}) => {

  const totalCard = todos?.length

  const task = () => { 
    handletask('/todos/false')
    setOnGet(false)
   }
  
   const taskCompleted = () => { 
    handletask('/todos/true')
    setOnGet(true)
   }
  
  return (
    <article className="task">
      <header className="task__header">
        <button className={`task__header--button ${onGet ? '' : 'onget'}`} onClick={task}>TASK</button>
        <button className={`task__header--button ${onGet ? 'onget' : ''}`} onClick={taskCompleted}>TASK COMPLETED</button>
      </header>

      {
      totalCard === 0
      ?(
        <h2>There are no Tasks, create a new one!</h2>
        )
        :(
            todos?.map((todo) => (
            <TodoCard 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            setOnUpDate={setOnUpDate}
            upDateTodo={upDateTodo}
            />
          ))
          )
          
      
      }
    </article>
  );
};

export default AllTodos;
