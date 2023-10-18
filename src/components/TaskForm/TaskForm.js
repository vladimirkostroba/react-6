import React from "react";
import css from './TaskForm.module.css'
import Button from "components/Button/Button";


// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { addTask } from "../../redux/actions";


const TaskForm = () => {
    const dispatch = useDispatch();

    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // Вызываем генератор экшена и передаем текст задачи для поля payload
        // Отправляем результат - экшен создания задачи
        dispatch(addTask(form.elements.text.value));
        form.reset();
  
      };


    
    return(
        <section className={css.formSection}>
            <form className={css.form} onSubmit={handleSubmit}>
            <input 
            className={css.field}
            type="text"
            name="text"
            placeholder="Enter task text"
            />
            <Button type="submit">Create</Button>
            </form>
        </section>
    )
}

export default TaskForm;