import React from "react";
import css from "./AppBar.module.css"
import TaskCounter from "components/TaskCounter/TaskCounter";
import StatusFilter from "components/StatusFilter.js/StatusFilter";


const AppBar = () => {
    return(
        <header>
            <section>
                <h2 className={css.title}>Tasks</h2>
                <TaskCounter/>
            </section>

            <section className={css.title}>
                <h2>Filter by status</h2>
                <StatusFilter/>
            </section>
        </header>
    )
}

export default AppBar;