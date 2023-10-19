// import { MdClose } from "react-icons/md";

// Импортируем хук
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { deleteTask , toggleCompleted} from "../../redux/actions";

import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDalate = () => dispatch(deleteTask(task.id))

  const handleToogle =() => dispatch(toggleCompleted(task.id))
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToogle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDalate}>
        close
      </button>
    </div>
  );
};
