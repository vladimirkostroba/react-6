import React from "react";
import css from "./StatusFilter.module.css"
import Button from "components/Button/Button";

import { useSelector, useDispatch  } from "react-redux";
import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";

const StatusFilter = () => {
    const filter = useSelector(getStatusFilter);
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter))

    return(
        <div className={css.wrapper}>
            <Button
             selected={filter === statusFilters.all}
             onClick={() => handleFilterChange(statusFilters.all)}
             >All</Button>

            <Button
             selected={filter === statusFilters.active}
             onClick={() => handleFilterChange(statusFilters.active)}
             >Active</Button>

            <Button
             selected={filter === statusFilters.completed}
             onClick={() => handleFilterChange(statusFilters.completed)}
             >Completed</Button>
        </div>
    )
}

export default StatusFilter;