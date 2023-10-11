import React from "react";
import css from "./StatusFilter.module.css"
import Button from "components/Button/Button";

import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";

const StatusFilter = () => {
    const filter = useSelector(getStatusFilter);

    return(
        <div className={css.wrapper}>
            <Button selected={filter === statusFilters.all}>All</Button>
            <Button selected={filter === statusFilters.active}>Active</Button>
            <Button selected={filter === statusFilters.completed}>Completed</Button>
        </div>
    )
}

export default StatusFilter;