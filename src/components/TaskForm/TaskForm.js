import React from "react";
import css from './TaskForm.module.css'
import Button from "components/Button/Button";

const TaskForm = () => {
    return(
        <section className={css.formSection}>
            <form className={css.form}>
            <input 
            className={css.field}
            type="text"
            placeholder="Enter task text"
            />
            <Button type="submit">Create</Button>
            </form>
        </section>
    )
}

export default TaskForm;