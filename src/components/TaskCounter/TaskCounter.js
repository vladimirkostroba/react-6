import React from "react";
import css from "./TaskCounter.module.css"
import { useSelector } from "react-redux";

import { getTasks } from "../../redux/selectors";

const TaskCounter = () => {
    const tasks = useSelector(getTasks);

    const count = tasks.reduce(
        (acc, task) => {
          if (task.completed) {
            acc.completed += 1;
          } else {
            acc.active += 1;
          }
          return acc;
        },
        { active: 0, completed: 0 }
      );

    return(
        <div>
            <p className={css.text}>{count.active}</p>
            <p className={css.text}>{count.completed}</p>
        </div>
    )
}

export default TaskCounter;