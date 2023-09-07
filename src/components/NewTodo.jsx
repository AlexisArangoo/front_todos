import React, { useEffect } from 'react'
import './styles/NewTodo.css'
import { useForm } from 'react-hook-form'


const NewTodo = ({createTodo, onUpDate, upDateTodo, setOnUpDate}) => {
  
  const {register, reset, handleSubmit} = useForm()
  
  useEffect(() => {
    reset(onUpDate)
  }, [onUpDate])
  
  
  const submit = (data) => { 

    if (onUpDate) {
      upDateTodo('/todos', data, onUpDate.id)
      setOnUpDate()
    } else {
      createTodo('/todos', data)
    }

    reset({
      title: '',
      description: ''
    })
  }

  return (
    <article className="task-form">
        <form className="task-form__form" onSubmit={handleSubmit(submit)}>
            <label className="task-form__label">Add task</label>

            <input {...register('title')} type="text" className="task-form__input" placeholder="Title" />

            <textarea {...register('description')} className="task-form__textarea" cols="30" rows="10" placeholder="Description"></textarea>

            <button type='submit' className="task-form__button">{onUpDate ? 'UpDate' : 'Create'}</button>
        </form>
    </article>
  )
}

export default NewTodo