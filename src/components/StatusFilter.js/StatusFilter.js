import React from "react";
import css from "./StatusFilter.module.css"
import Button from "components/Button/Button";

const StatusFilter = () => {
    return(
        <div className={css.wrapper}>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
        </div>
    )
}

export default StatusFilter;